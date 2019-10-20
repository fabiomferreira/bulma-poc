class TaskController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputTask = $('#input-task');
        this._tasks = new Tasks();
        this._tasksView = new TasksView('#tasks');
        this._tasksView.update(this._tasks);
    }

    add(event) {
        event.preventDefault();
        let task = new Task(this._inputTask.value);
        this._tasks.add(task);
        this.clearForm();
        this._tasksView.update(this._tasks);
    }

    clearForm() {
        this._inputTask.value = '';
    }
}
