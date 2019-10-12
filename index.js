function addTask() {
    var inputTask = document.getElementById('input-task');
    var taskList = document.getElementById('task-list');
    var newTask = createTaskCheckbox(inputTask.value);
    taskList.innerHTML += newTask;
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
