// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
   
    alert('Form submitted successfully! Thank you, ' + name + '. We will get back to you at ' + email + ' as soon as possible.');
   });