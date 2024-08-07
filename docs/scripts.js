// Initialize EmailJS with your user ID
emailjs = emailjs.init('XBvyjxBZUKkNHLkUh_EV3'); // Ensure this is your actual EmailJS user ID

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create an email object
        const emailParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // Send email using EmailJS
        emailjs.send('ID009', 'template_1pwjqlh', emailParams) // Ensure correct Service ID and Template ID
            .then(function(response) {
                console.log('Success:', response);
                alert('Your message has been sent!');
                contactForm.reset();
            }, function(error) {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
            });
    });
});
