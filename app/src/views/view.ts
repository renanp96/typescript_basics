import { inspect } from "../decorators/inspect.js";
import { loginExecutionTime } from "../decorators/loginExecutionTime.js";

export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string, ) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Erro no seletor ${selector}! O elemento não existe na DOM do formulario.`);
        }
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
    @inspect
    @loginExecutionTime(true)
    public update(model: T): void {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}