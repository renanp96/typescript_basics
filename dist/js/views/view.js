export class View {
    constructor(selector, escape) {
        this.escape = false;
        this.element = document.querySelector(selector);
        if (escape) {
            this.escape = escape;
        }
    }
    /**
     * Updates the view with the provided model.
     *
     * @param {any} model - The model to be rendered and updated.
     * @protected
     */
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
