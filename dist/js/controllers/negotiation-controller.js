import { DaysOfWeek } from "../enums/daysOfWeek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiations-view.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationView('#negociacoesView');
        this.messageView = new MessageView('#mensagemView');
        this.inputDate = document.querySelector('#data');
        this.inputQtde = document.querySelector("#quantidade");
        this.inputValue = document.querySelector('#valor');
        this.negotiationsView.update(this.negotiations);
    }
    /**
     * Adds a new negotiation to the list, updating the view, and displays a message.
     */
    adds() {
        const negotiation = this.createNegotiation();
        if (!this.isWeekday(negotiation.date)) {
            this.messageView.update("Negociações são valdias apenas em dias uteis.");
            return;
        }
        this.negotiations.addsNegotiation(negotiation);
        this.clearForm();
        this.updateViews();
    }
    /**
     * Creates a new Negotiation object based on user input.
     *
     * @returns {Object|Negotiation} - A new Negotiation object.
     */
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const qtde = parseInt(this.inputQtde.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, qtde, value);
    }
    /**
     * Clear the form fields.
     */
    clearForm() {
        this.inputDate.value = '';
        this.inputQtde.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    /**
     * Update the negotiations views after input a new one.
     */
    updateViews() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negociação adicionada");
    }
    /**
     * Validates the weekday.
     *
     * @param {Date} date - The input date.
     * @returns {boolean}
     */
    isWeekday(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }
}
