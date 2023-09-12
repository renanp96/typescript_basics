export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    /**
     * Updates the view with the provided model.
     *
     * @param {any} model - The model to be rendered and updated.
     * @protected
     */
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
