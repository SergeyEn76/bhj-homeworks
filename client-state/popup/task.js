let checkmodalWindow = document.cookie.split(';');
let modalChecked = checkmodalWindow.find((element) => 
    element === 'modalWindow=checked'
);

if (modalChecked !== 'modalWindow=checked') {
    let modalWindow = document.querySelector('.modal');
    modalWindow.classList.add('modal_active');

    modalWindow.addEventListener('click', (event) => {
        let removeElement = modalWindow.querySelector('.modal__close_times');
            if (removeElement === event.target) {
                modalWindow.classList.remove('modal_active');
                document.cookie = "modalWindow=checked; expires=Tue, 19 Jan 2026 03:14:07 GMT";
            }
    })
}