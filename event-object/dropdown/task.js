let arr = Array.from(document.getElementsByClassName('dropdown__item'));
let item = document.querySelector('.dropdown__value');
let listItem = document.querySelector('.dropdown__list');

item.addEventListener('click', () => listItem.classList.toggle('dropdown__list_active'));

for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = (event) => {
        event.preventDefault();
        item.textContent = arr[i].textContent;
        listItem.classList.toggle('dropdown__list_active');
    };
}