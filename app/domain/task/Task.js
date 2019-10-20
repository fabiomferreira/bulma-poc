class Task {
    constructor(_description) {
        Object.assign(this, {
            _description,
            _done: false,
            created: new Date()
        })
    }

    get description() {
        return this._description;
    }

    get done() {
        return this._done;
    }
}
