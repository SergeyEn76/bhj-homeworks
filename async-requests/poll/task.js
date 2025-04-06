function getDates() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.responseType = 'text'
    xhr.send();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            pollList(xhr.responseText);
        };
    };
}

function pollList(text) {
    let receivedPoll = JSON.parse(text);

    document.querySelector('.poll__title').insertAdjacentText('afterbegin', receivedPoll.data.title);

    let answer = document.getElementById('poll__answers');
    for (let i = 0; i < receivedPoll.data.answers.length; i++) {
        answer.insertAdjacentHTML('beforeend', `<button class="poll__answer">${receivedPoll.data.answers[i]}</button>`);
    }

    answer.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Спасибо, ваш голос засчитан!');
    })
}

getDates();