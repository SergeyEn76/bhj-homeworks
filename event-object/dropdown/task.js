let dropdownArray = Array.from(document.getElementsByClassName('dropdown__value'));

for (let i = 0; i < dropdownArray.length; i++) {
    dropdownArray[i].onclick = () => {
        let itemArray = Array.from(document.getElementsByClassName('dropdown__item'));
        let listItem = document.querySelector('.dropdown__list');
        listItem.classList.toggle('dropdown__list_active');
        for (let j = 0; j < itemArray.length; j++) {
            itemArray[j].onclick = (event) => {
                event.preventDefault();
                dropdownArray[i].textContent = itemArray[j].textContent;
                listItem.classList.toggle('dropdown__list_active');
            };
        };
    };
};