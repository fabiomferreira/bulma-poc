class MessageView extends View {

    template(model) {
        return model.text
            ? `
            <div class="notification is-info">
                ${model.text}
            </div>
            `
            : '<div></div>';
    }
}
