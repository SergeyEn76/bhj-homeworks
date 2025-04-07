const formToSend = document.forms.form;

formToSend.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
        document.getElementById('progress').value = event.loaded / event.total;
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(formToSend);
    
    xhr.send(formData);
});