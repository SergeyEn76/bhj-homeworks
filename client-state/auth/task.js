const formToSend = document.forms.signin__form;
let chekedUser = localStorage.getItem('user');

if (chekedUser === '') {
    formToSend.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

        const formData = new FormData(formToSend);

        xhr.responseType = 'json';
        
        xhr.send(formData);

        xhr.onload = () => {
            let receivedText = xhr.response;
            if (receivedText.success === true) {
                document.querySelector('.welcome').classList.add('welcome_active');
                document.getElementById('user_id').textContent = receivedText.user_id;
                localStorage.setItem('user', receivedText.user_id);
            } else {
                localStorage.setItem('user','');
            }
           formToSend.reset();
        };
    });
} else {
    document.querySelector('.welcome').classList.add('welcome_active');
    document.getElementById('user_id').textContent = chekedUser;
}