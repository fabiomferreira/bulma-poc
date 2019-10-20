let taskController = new TaskController();

document
    .querySelector('#new-task')
    .addEventListener('submit', taskController.add.bind(taskController));
