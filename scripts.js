document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Thank you for your message!';
            formMessage.style.color = 'green';

            form.reset();
        }
    });
});
