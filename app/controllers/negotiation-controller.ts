import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiations-view.js";

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQtde: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationView('#negociacoesView');
    private messageView = new MessageView('#mensagemView');

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQtde = document.querySelector("#quantidade");
        this.inputValue = document.querySelector('#valor');
        this.negotiationsView.update(this.negotiations);
    }

    /**
     * Adds a new negotiation to the list, updating the view, and displays a message.
     */
    public adds(): void {
        const negotiation = this.createNegotiation();
        this.negotiations.addsNegotiation(negotiation);
        this.clearForm();
        this.updateViews();
    }

    /**
     * Creates a new Negotiation object based on user input.
     * 
     * @returns {Object|Negotiation} - A new Negotiation object.
     */
    private createNegotiation(): Negotiation {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const qtde = parseInt(this.inputQtde.value);
        const value = parseFloat(this.inputValue.value);

        return new Negotiation(date, qtde, value);
    }

    /**
     * Clear the form fields.
     */
    private clearForm() : void {
        this.inputDate.value = '';
        this.inputQtde.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }

    private updateViews(): void {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negociacao adicionada");
    }
}