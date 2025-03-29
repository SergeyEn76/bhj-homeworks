let iconArray = Array.from(document.querySelectorAll('.font-size'));
let textcolorArray = Array.from(document.querySelectorAll('[data-text-color]'));
let phonecolorArray = Array.from(document.querySelectorAll('[data-bg-color]'));
let textElementP = document.querySelector('.book__content');
let colorText = "book_color-black";
let colorPhone = "text_color_black";

function changeTextcolor(textColor) {
    textElementP.classList.remove(colorText);
    textElementP.classList.add(textColor);
    colorText = textColor;
}

function changePhonecolor(phoneColor) {
    textElementP.classList.remove(colorPhone);
    textElementP.classList.add(phoneColor);
    colorPhone = phoneColor;
}

for (let i = 0; i < iconArray.length; i++) {
    iconArray[i].onclick = (event) => {
        event.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        iconArray[i].classList.add('font-size_active');
        if (iconArray[i].getAttribute('data-size') === 'small') {
            textElementP.classList.add('book_fs-small');
            textElementP.classList.remove('book_fs-big');
        } else if (iconArray[i].getAttribute('data-size') === 'big') {
            textElementP.classList.add('book_fs-big');
            textElementP.classList.remove('book_fs-small');
        } else {
            textElementP.classList.remove('book_fs-big');
            textElementP.classList.remove('book_fs-small');
        }
    }
}

for (let i = 0; i < textcolorArray.length; i++) {
    textcolorArray[i].onclick = (event) => {
        event.preventDefault();
        document.querySelector('.color_active').classList.remove('color_active');
        textcolorArray[i].classList.add('color_active');
        if (textcolorArray[i].getAttribute('data-text-color') === 'gray') {
            changeTextcolor('book_color-gray');
        } else if (textcolorArray[i].getAttribute('data-text-color') === 'whitesmoke') {
            changeTextcolor('book_color-whitesmoke');
        } else {
            changeTextcolor('book_color-black');
        }
    }
}

for (let i = 0; i < phonecolorArray.length; i++) {
    phonecolorArray[i].onclick = (event) => {
        event.preventDefault();
        document.querySelector('.color_active').classList.remove('color_active');
        phonecolorArray[i].classList.add('color_active');
        if (phonecolorArray[i].getAttribute('data-bg-color') === 'gray') {
            changePhonecolor('text_color_gray');
        } else if (phonecolorArray[i].getAttribute('data-bg-color') === 'white') {
            changePhonecolor('text_color_whitesmoke');
        } else {
            changePhonecolor('text_color_black');
        }
    }
}