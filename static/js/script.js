/*========= toggle icon navbar  ======== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
};




/*========= scrool section active link ======== */

let sections = document.querySelectorAll('section')
let navlink  = document.querySelectorAll('header nav a')

window.onscroll = () => {
  // Get all sections and nav links
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  // Get the current scroll position
  let scrollPosition = window.scrollY;

  sections.forEach(section => {
    // Get the section’s position and dimensions
    let sectionTop = section.offsetTop - 150; // Offset for the section top
    let sectionHeight = section.offsetHeight; // Height of the section
    let sectionId = section.getAttribute('id'); // Section ID

    // Check if the current scroll position is within the section’s range
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove 'active' class from all nav links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add 'active' class to the corresponding nav link
      document.querySelector(`header nav a[href="#${sectionId}"]`).classList.add('active');
    }
  });

/*========= sticky navbar  ======== */
let header = document.querySelector('header')

header.classList.toggle('sticky', window.scrollY > 100);

/*========= remove toggle icon and  navbar when click navbar link (scroll ) ======== */

  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active');

};

/*========= scroll reveal   ======== */

ScrollReveal({
    //reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});


ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .project-box, .contact form',{ origin:'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img',{ origin:'left' });

ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });


/*========= typed.js ======== */

const typed = new Typed('.multiple-text',{
  strings: ['Frontend Developer', 'And', 'Backend Developer ', ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true
}); 

/*========= Email send .js ======== */

function emailSend(){

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}
    

  
