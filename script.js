document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submit

    // Get form data
    const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // emailjs.send('service_dete69n', 'template_2ay1ozd', { 
   emailjs.send('sahalin123', 'template_qnw7dja', {
        from_name: name,
        // from_email: email,
        from_phone: phone,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message.');
    });
});