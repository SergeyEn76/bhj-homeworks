let parent = document.querySelector('.rotator');
let nextChild = parent.firstElementChild;
let dataSpeed = nextChild.getAttribute('data-speed');

function rotation(dataSpeed) {
    setTimeout(() => {
        nextChild.classList.remove('rotator__case_active');
        nextChild = nextChild.nextElementSibling;
        if (nextChild === null) {
            nextChild = parent.firstElementChild;;
        }
        nextChild.classList.add('rotator__case_active');
        nextChild.style.color = nextChild.getAttribute('data-color');
        dataSpeed = nextChild.getAttribute('data-speed');
        rotation(dataSpeed);
    }, dataSpeed);
}

rotation(dataSpeed);