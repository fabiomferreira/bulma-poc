class TasksView {
    constructor (selector) {
        this._element = document.querySelector(selector);
    }

    update(model) {
        this._element.innerHTML = this.template(model);
    }

    template(model) {
        return `
            <div id="task-list" class="field">
            ${model.toArray().map(task => 
                `
                <p class="control">
                    <label class="checkbox">
                        <input type="checkbox" onchange="onTaskCheckboxChange(this)"/>
                        ${task.description}
                    </label>
                </p>

                `
            ).join('')}
            </div>
        `
    }
}
