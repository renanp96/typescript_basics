var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escape } from "../decorators/escape.js";
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
                    <td>${this.formatDate(item.date)}</td>
                    <td>${item.qtde}</td>
                    <td>${item.value}</td>
                </tr>
                `;
        }).join('');
    }
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
__decorate([
    escape
], NegotiationView.prototype, "template", null);
//# sourceMappingURL=negotiations-view.js.map