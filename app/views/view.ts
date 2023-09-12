export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    /**
     * Generates the HTML template for renderin the model.
     *
     * @param {any} model - The model to be rendered.
     * @protected
     */
    protected abstract template(model: T): string;

    /**
     * Updates the view with the provided model.
     * 
     * @param {any} model - The model to be rendered and updated.
     * @protected
     */
    update(model: T): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}