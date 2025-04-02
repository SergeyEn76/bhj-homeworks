let form = document.forms.tasks__form;
let taskList = document.querySelector('.tasks__list');
let tasks = Array.from(document.querySelectorAll('.task__remove'));
let storageTasks = localStorage.getItem('task');

if (!storageTasks) {
    console.log('storage empty');    
} else {
    console.log('we have storage');
    let tempStorage = storageTasks.split(';');
    for (let element of tempStorage) {
        let lastSymbol = element.substring(element.length - 1, element.length);
        if (lastSymbol === '×') {
            element = element.substr(0, element.length - 1);
        }
        taskList.insertAdjacentHTML('beforeend', `<div class="task"><div class="task__title">${element}</div><a href="#" class="task__remove">&times;</a></div>`);
    }
    tasks = Array.from(document.querySelectorAll('.task'));
    chekForDelette();
}

function chekForDelette() {
    for (let element of tasks) {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            element.remove();
            tasks = Array.from(document.querySelectorAll('.task'));
            tasksStorage();
        })
    }
    tasksStorage();
}

function tasksStorage() {
    let tempArray = [];
    for (let element of tasks) {
        tempArray.push(element.textContent);
    }
    let forStorage = tempArray.join(';');
    localStorage.setItem('task', forStorage);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let newTask = form.elements['task__input'].value;
    if (newTask === '')
        return;
    taskList.insertAdjacentHTML('beforeend', `<div class="task"><div class="task__title">${newTask}</div><a href="#" class="task__remove">&times;</a></div>`);
    form.reset();
    tasks = Array.from(document.querySelectorAll('.task'));
    chekForDelette();
});