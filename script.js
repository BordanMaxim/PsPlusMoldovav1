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
        alert('Ваше сообщение отправлено, мы скоро с вами свяжемся!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Упс! Что-то пошло не так, попробуйте еще раз.');
    });
});


const phoneInput = document.getElementById('phone');

        phoneInput.addEventListener('input', (event) => {
            const input = event.target;
            const inputValue = input.value;

            if (!inputValue.startsWith("+373 ")) {
                input.value = "+373 ";
            }

            // Remove any non-digit characters (except for the initial "+373 ")
            input.value = "+373 " + inputValue.slice(5).replace(/\D/g, '').slice(0, 8);
        });