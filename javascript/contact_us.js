document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');
    const form = document.querySelector('#contact-form');
    console.log('Form:', form);
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields before submitting.');
                return;
            }

            alert('Thank you for your message! We will get back to you soon.');

            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        });
    } else {
        console.error('Form not found');
    }
});