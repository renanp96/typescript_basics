import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationView } from "../views/negotiations-view.js";

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQtde: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationView('#negociacoesView');

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQtde = document.querySelector("#quantidade");
        this.inputValue = document.querySelector('#valor');
        this.negotiationsView.update(this.negotiations);
    }

    adds(): void {
        const negotiation = this.createNegotiation();

        this.negotiations.addsNegotiation(negotiation);
        this.negotiationsView.update(this.negotiations);

        console.log(this.negotiations.listNegotiation());
    }

    createNegotiation(): Negotiation {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const qtde = parseInt(this.inputQtde.value);
        const value = parseFloat(this.inputValue.value);

        return new Negotiation(date, qtde, value);
    }
}