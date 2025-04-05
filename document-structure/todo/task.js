let form = document.forms.tasks__form;
let taskList = document.querySelector('.tasks__list');
let tasksArray = Array.from(document.querySelectorAll('.task'));
let storageTasks = JSON.parse(localStorage.getItem('task'));

function tasksStorage() { //сохранение задач в localstorage
    let tempArray = tasksArray.map((element) => {
        return element.querySelector('.task__title').textContent;
    });
    localStorage.setItem('task', JSON.stringify(tempArray));
}

function newTasks(newtask){ //создание новой задачи
    taskList.insertAdjacentHTML('beforeend', `<div class="task"><div class="task__title">${newtask}</div><a href="#" class="task__remove">&times;</a></div>`);
    tasksArray = Array.from(document.querySelectorAll('.task'));
}

function tasks() { //проверка наличия задач в localstorage и вывод на экран
    if (storageTasks !== null && storageTasks !== '') {
        for (let element of storageTasks) {
            newTasks(element);
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
        newTasks(newTask);
        form.reset();
        tasksStorage();
    });

    //удаление задачи
    taskList.onclick = (event) => {
        event.preventDefault();
        for (let element of tasksArray) {
            removeElement = element.querySelector('.task__remove');
            if (removeElement === event.target) {
                element.remove();
                tasksArray = Array.from(document.querySelectorAll('.task'));
                tasksStorage();
            }
        }
    }
}

tasks();