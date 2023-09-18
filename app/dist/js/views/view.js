export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Erro no seletor ${selector}! O elemento não existe na DOM do formulario.`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}
