const taskController = new TaskController();

document
    .querySelector('#new-task')
    .addEventListener('submit', taskController.add.bind(taskController));

document
    .querySelector('#remove-button')
    .addEventListener('click', taskController.removeAll.bind(taskController));
