import { View } from "./view.js";
export class NegotiationView extends View {
    //Returns an HTML string
    /**
     * Generates an HTML table template based on the provided Negotiations model.
     *
     * @param {Object|Negotiations} model - The Negotiations model containing data.
     * @returns {string} - The HTML table element template as string.
     */
    template(model) {
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
            ${this.generateTableLines(model)}
            </tbody>
        </table>
        `;
    }
    /**
     * Generates HTML table lines base on the provided Negotiations model.
     *
     * @param {Object|Negotiations} model - The Negotiations model containing data.
     * @returns {string} - The HTML element containing lines.
     */
    generateTableLines(model) {
        return model.listNegotiation().map(item => {
            return `
                <tr>
                    <td>${new Intl.DateTimeFormat().format(item.date)}</td>
                    <td>${item.qtde}</td>
                    <td>${item.value}</td>
                </tr>
                `;
        }).join('');
    }
}
