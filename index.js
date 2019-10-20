var inputTask = document.getElementById('input-task');
var taskList = document.getElementById('task-list');
document.querySelector('#new-task').addEventListener('submit', addTask);

function addTask(event) {
    var newTask = createTaskCheckbox(inputTask.value);
    taskList.innerHTML += newTask;
    inputTask.value = '';

    event.preventDefault();
}

function createTaskCheckbox(label) {
    var checkbox = `
        <p class="control">
            <label class="checkbox">
                <input type="checkbox" onchange="onTaskCheckboxChange(this)"/>
                ${label}
            </label>
        </p>
    `;
    return checkbox;
}

function onTaskCheckboxChange(element) {
    element.parentElement.classList.toggle('task-done');
}
