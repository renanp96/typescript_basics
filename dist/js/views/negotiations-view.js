import { View } from "./view.js";
export class NegotiationView extends View {
    //Returns an HTML string
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
}
