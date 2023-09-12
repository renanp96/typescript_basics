import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.inputDate = document.querySelector('#data');
        this.inputQtde = document.querySelector("#quantidade");
        this.inputValue = document.querySelector('#valor');
    }
    adds() {
        const negotiation = this.createNegotiation();
        this.negotiations.addsNegotiation(negotiation);
        console.log(this.negotiations.listNegotiation());
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const qtde = parseInt(this.inputQtde.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, qtde, value);
    }
}
