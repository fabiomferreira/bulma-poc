class TasksView extends View {

    template(model) {
        return `
            <div id="task-list" class="field">
            ${model.toArray().map(task => 
                `
                <p class="control">
                    <label class="checkbox">
                        <input class="task-checkbox" type="checkbox" onchange="TaskController.check(event)"/>
                        ${task.description}
                    </label>
                </p>

                `
            ).join('')}
            </div>
        `
    }
}
