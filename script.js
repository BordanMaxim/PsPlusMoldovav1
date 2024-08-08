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


document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 1; // Начальная активная позиция

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active');
            item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });
        items[currentIndex].classList.add('active');
    }

    function showPrev(event) {
        event.preventDefault();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    }

    function showNext(event) {
        event.preventDefault();
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }

    prevButton.addEventListener('click', showPrev);
    nextButton.addEventListener('click', showNext);

    updateCarousel(); // Начальная настройка
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