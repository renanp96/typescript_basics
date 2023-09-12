import { Negotiations } from "../models/negotiations.js";

export class NegotiationView {
    private element: HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }

    //Returns an HTML string
    template(model: Negotiations): string{
        return `
        <table class="table table-hover table_bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
            ${model.listNegotiation().map(item => {
                return `
                <tr>
                    <td>${new Intl.DateTimeFormat().format(item.date)}</td>
                    <td>${item.qtde}</td>
                    <td>${item.value}</td>
                </tr>
                `;
            }).join('')}
            </tbody>
        </table>
        `;
    }

    update(model: Negotiations): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}