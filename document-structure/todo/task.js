let form = document.forms.tasks__form;
let taskList = document.querySelector('.tasks__list');
let tasksArray = Array.from(document.querySelectorAll('.task__remove'));
let storageTasks = localStorage.getItem('task');
//localStorage.removeItem('task');

function tasksStorage() {
    //добавление задач в localstorage
    let tempArray = [];
    for (let element of tasksArray) {
        tempArray.push(element.textContent);
    }
    localStorage.setItem('task', tempArray);
}

function tasks() {
    //проверка наличия задач в localstorage и вывод на экран
    if (storageTasks !== null && storageTasks !== '') {
        let tempStorage = storageTasks.split(',');
        for (let element of tempStorage) {
            let lastSymbol = element.substring(element.length - 1, element.length);
            if (lastSymbol === '×') {
                element = element.substring(0, element.length - 1);
            }
            taskList.insertAdjacentHTML('beforeend', `<div class="task"><div class="task__title">${element}</div><a href="#" class="task__remove">&times;</a></div>`);
            tasksArray = Array.from(document.querySelectorAll('.task'));
        }
    }
    
    //добавление задачи
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let newTask = form.elements['task__input'].value;
        if (newTask.trim() === '') {
            form.reset();
            return;
        }
        taskList.insertAdjacentHTML('beforeend', `<div class="task"><div class="task__title">${newTask}</div><a href="#" class="task__remove">&times;</a></div>`);
        tasksArray = Array.from(document.querySelectorAll('.task'));
        tasksStorage();
    });

    //удаление задачи
    for (let element of tasksArray) {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            element.remove();
            tasksArray = Array.from(document.querySelectorAll('.task'));
            tasksStorage();
        })
    }
}

tasks();