let param = document.querySelectorAll('.reveal');

function isVisible(element) {
    for (let i = 0; i < element.length; i++) {
        let {top, bottom} = element[i].getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
            element[i].classList.add('reveal_active');
        } else {
            element[i].classList.remove('reveal_active');
        }    
    }
}

setInterval(() => {
    isVisible(param);
}, 500);