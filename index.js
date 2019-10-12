function addTask() {
    var inputTask = document.getElementById('input-task');
    var taskList = document.getElementById('task-list');
    var newTask = createTaskCheckbox(inputTask.value);
    taskList.appendChild(newTask);
}

function createTaskCheckbox(label) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        this.parentElement.classList.toggle('task-done');
    });

    var checkboxLabel = document.createElement('span');
    checkboxLabel.textContent = label;


    var checkboxWrapper = document
        .createElement('label');
    checkboxWrapper
        .classList
        .add('checkbox');
    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(checkboxLabel);

    return checkboxWrapper;
}
