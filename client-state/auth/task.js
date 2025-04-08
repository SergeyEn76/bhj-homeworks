const formToSend = document.forms.signin__form;

formToSend.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    const formData = new FormData(formToSend);
    
    xhr.send(formData);

    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            let receivedText = JSON.parse(xhr.responseText);
            if (receivedText.success == true) {
                document.querySelector('.welcome').classList.add('welcome_active');
                document.getElementById('user_id').textContent = receivedText.user_id;
            }
        };
    };

    formToSend.reset();
});