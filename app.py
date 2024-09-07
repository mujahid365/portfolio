from flask import Flask, render_template, request, abort
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the SQLAlchemy instance
db = SQLAlchemy(app)


class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(11), unique=True, nullable=False)
    message = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"<Message {self.username}>"


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit_form():
    fullname = request.form.get('name')
    email = request.form.get('email')
    phone = request.form.get('phone')
    message = request.form.get('message')

    new_message = Message(fullname=fullname, email=email, phone=phone, message=message)
    db.session.add(new_message)
    db.session.commit()  # Commit to save in the database
    return f"Form submitted with name: {fullname}"


@app.route('/data', methods=['GET', 'POST'])
def display_data():
    if request.method == 'POST':
        password = request.form.get('password')

        # Simple password check
        if password == '1234':  # Replace with your secure password
            users = Message.query.all()
            return render_template('display.html', users=users)
        else:
            abort(401)  # Return a 401 Unauthorized error if password is incorrect

    return render_template('password.html')


@app.errorhandler(401)
def unauthorized_error(e):
    return "Unauthorized Access: Incorrect Password", 401


if __name__ == '__main__':
    app.run()
