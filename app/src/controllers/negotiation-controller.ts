import { domInjector } from "../decorators/domInjector.js";
import { inspect } from "../decorators/inspect.js";
import { loginExecutionTime } from "../decorators/loginExecutionTime.js";
import { DaysOfWeek } from "../enums/daysOfWeek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiations-view.js";

export class NegotiationController {
    @domInjector('#data')
    private inputDate: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQtde: HTMLInputElement;
    @domInjector('#valor')
    private inputValue: HTMLInputElement;

    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationView('#negociacoesView');
    private messageView = new MessageView('#mensagemView');

    constructor() {
        this.negotiationsView.update(this.negotiations);
    }

    /**
     * Adds a new negotiation to the list, updating the view, and displays a message.
     */
    @inspect
    @loginExecutionTime()
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