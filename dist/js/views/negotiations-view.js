import { View } from "./view.js";
export class NegotiationView extends View {
    //Returns an HTML string
    /**
     * Generates an HTML table template based on the provided Negotiations model.
     *
     * @param {Object|Negotiations} model - The Negotiations model containing data.
     * @returns {string} - The HTML table element template as string.
     * @protected
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
     * @private
     */
    generateTableLines(model) {
        return model.listNegotiation().map(item => {
            return `
                <tr>
                    <td>${this.formartDate(item.date)}</td>
                    <td>${item.qtde}</td>
                    <td>${item.value}</td>
                </tr>
                `;
        }).join('');
    }
    /**
     * Format a JavaScript Date object as a localizad date string.
     *
     * @param {Date} date - The Date object to be formatted.
     * @returns {string} - The formatted date string.
     * @private
     */
    formartDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
