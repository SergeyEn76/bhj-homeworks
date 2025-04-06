let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'text'
xhr.send();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        createList(xhr.responseText);
    };
};

function createList(text) {
    let receivedText = JSON.parse(text);
    let receivedValue = Object.values(receivedText.response.Valute);
    let newLine = document.getElementById('items');

    document.querySelector('.loader_active').classList.remove('loader_active');

    for (let i = 0; i < receivedValue.length; i++) {
        newLine.insertAdjacentHTML('beforeend', `<div class="item"><div class="item__code">${receivedValue[i].CharCode} </div><div class="item__value">${receivedValue[i].Value} </div><div class="item__currency">руб.</div></div>`);
    }
}