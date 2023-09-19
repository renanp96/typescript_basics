import { domInjector } from "../decorators/domInjector.js";
import { inspect } from "../decorators/inspect.js";
import { loginExecutionTime } from "../decorators/loginExecutionTime.js";
import { DaysOfWeek } from "../enums/daysOfWeek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationService } from "../services/negotiationService.js";
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
    private negotiationService = new NegotiationService();

    constructor() {
        this.negotiationsView.update(this.negotiations);
    }

    /**
     * Adds a new negotiation to the list, updates the view, and displays a message.
     * Creates a new negotiation instance based on user input and adds it to the list of negotiations.
     * 
     * @returns {void} 
     * @throws {Error} - If the date format is invalid or the view cannot be updated.
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
        console.log(negotiation.toString());
        this.clearForm();
        this.updateViews();
    }

    /**
     * Clear the form fields by restting their values and focusing on the date field.
     */
    private clearForm(): void {
        this.inputDate.value = '';
        this.inputQtde.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }

    /**
     * Update the negotiations views after input a new one.
     * 
     * @returns {void}
     */
    private updateViews(): void {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negociação adicionada");
    }

    /**
     * Retrieves negotiation values and update the view.
     * Fetches negotiation data from the server for the current day,
     * adds to the list of negotiation, and updates the negotiations view.
     * 
     * @returns {void}
     */
    public getNegotiationValues(): void {
        this.negotiationService.getNegotiationsOfDay()
            .then(negotiationNow => {
                for (let n of negotiationNow) {
                    this.negotiations.addsNegotiation(n);
                }
                this.negotiationsView.update(this.negotiations);
            });
    }

    /**
     * Checks if a given date falls on a weekday (Monday to Friday).
     *
     * @param {Date} date - The date to check.
     * @returns {boolean} - True if date is a weekday, otherwise false.
     */
    private isWeekday(date: Date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }
}