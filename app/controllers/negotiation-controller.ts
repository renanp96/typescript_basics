import { Negotiation } from "../models/negotiation.js";

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQtde: HTMLInputElement;
    private inputValue: HTMLInputElement;

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQtde = document.querySelector("#quantidade");
        this.inputValue = document.querySelector('#valor');
    }

    adds(): void {
        const negotiation = this.createNegotiation();
        console.log(negotiation);
    }

    createNegotiation(): Object {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const qtde = parseInt(this.inputQtde.value);
        const value = parseFloat(this.inputValue.value);

        return new Negotiation(date, qtde, value);
    }
}