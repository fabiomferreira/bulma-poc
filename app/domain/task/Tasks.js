class Tasks {

    constructor() {
        this._tasks = [];
    }

    add(task) {
        this._tasks.push(task);
    }

    toArray() {
        return [].concat(this._tasks);
    }
}
