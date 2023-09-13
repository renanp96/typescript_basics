import { View } from "./view.js";
export class NegotiationView extends View {
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
    formartDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
