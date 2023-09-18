import { loginExecutionTime } from "../decorators/loginExecutionTime.js";
import { DaysOfWeek } from "../enums/daysOfWeek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiations-view.js";

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQtde: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationView('#negociacoesView', true);
    private messageView = new MessageView('#mensagemView');

    constructor() {
        this.inputDate = document.querySelector('#data') as HTMLInputElement;
        this.inputQtde = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValue = document.querySelector('#valor') as HTMLInputElement;
        this.negotiationsView.update(this.negotiations);
    }

    /**
     * Adds a new negotiation to the list, updating the view, and displays a message.
     */
    //@loginExecutionTime()
    public adds(): void {
        const negotiation = Negotiation.createOf(
            this.inputDate.value,
            this.inputQtde.value,
            this.inputValue.value
        );

        if (!this.isWeekday(negotiation.date)) {
            this.messageView.update("Negociações são valdias apenas em dias uteis.");
            return;
        }

        this.negotiations.addsNegotiation(negotiation);
        this.clearForm();
        this.updateViews();
    }

    /**
     * Clear the form fields.
     */
    private clearForm(): void {
        this.inputDate.value = '';
        this.inputQtde.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }

    /**
     * Update the negotiations views after input a new one.
     */
    private updateViews(): void {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negociação adicionada");
    }

    /**
     * Validates the weekday.
     *
     * @param {Date} date - The input date.
     * @returns {boolean}
     */
    private isWeekday(date: Date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }
}