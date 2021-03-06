class TaskController {

    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputTask = $('#input-task');
        this._tasks = new Tasks();
        this._tasksView = new TasksView('#tasks');
        this._tasksView.update(this._tasks);
        this._message = new Message();
        this._messageView = new MessageView('#message-container');
        this._messageView.update(this._message);
    }

    add(event) {
        event.preventDefault();
        if(!this._inputTask.value) return;
        let task = new Task(this._inputTask.value);
        this._tasks.add(task);
        this._message.text = "Task created successfully!";
        this._messageView.update(this._message);
        this.clearForm();
        this._tasksView.update(this._tasks);
    }

    removeAll() {
        this._tasks.toEmpty();
        this._tasksView.update(this._tasks);
        this._message.text = 'Tasks removed successfully';
        this._messageView.update(this._message);
    }

    static check(event) {
        console.log(event);
    }

    clearForm() {
        this._inputTask.value = '';
    }
}
