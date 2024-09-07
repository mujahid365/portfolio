from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit_form():
    name = request.form.get('name')
    # Handle the form data here
    return f"Form submitted with name: {name}"


if __name__ == '__main__':
    app.run()
