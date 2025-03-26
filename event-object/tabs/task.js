let tabArray = Array.from(document.querySelectorAll('.tab'));
let contentArray = Array.from(document.querySelectorAll('.tab__content'));

function changeClass(before, after) {
    tabArray[before].classList.remove('tab_active');
    tabArray[after].classList.add('tab_active');
    contentArray[before].classList.remove('tab__content_active');
    contentArray[after].classList.add('tab__content_active');
}

document.addEventListener('keydown', (event) => {
    let activeTab = document.querySelector('.tab_active');
    let index = tabArray.indexOf(activeTab);
    if (event.key === 'Tab' || event.key === 'ArrowRight') {
        event.preventDefault();
        if (index < tabArray.length-1) {
            changeClass(index, index+1);
        } else {
            changeClass(index, 0);
        }
    } else if (event.key === 'ArrowLeft') {
        if (index === 0) {
            changeClass(0, tabArray.length-1);
        } else {
            changeClass(index, index-1);
        }
    }
});

for (let i = 0; i < tabArray.length; i++) {
    tabArray[i].onclick = () => {
        document.querySelector('.tab_active').classList.remove('tab_active');
        document.querySelector('.tab__content_active').classList.remove('tab__content_active');
        tabArray[i].classList.add('tab_active');
        contentArray[i].classList.add('tab__content_active');
    }
}