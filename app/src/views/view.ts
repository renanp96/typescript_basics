export abstract class View<T> {
    protected element: HTMLElement;
    private escape = false;

    constructor(selector: string, escape?: boolean) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Erro no seletor ${selector}! O elemento não existe na DOM do formulario.`);
        }

        if (escape) {
            this.escape = escape;
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
    public update(model: T): void {
        let template = this.template(model);

        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.element.innerHTML = template;
    }
}