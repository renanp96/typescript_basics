var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/domInjector.js";
import { inspect } from "../decorators/inspect.js";
import { loginExecutionTime } from "../decorators/loginExecutionTime.js";
import { DaysOfWeek } from "../enums/daysOfWeek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationService } from "../services/negotiationService.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiations-view.js";
import { print } from "../utils/print.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationView('#negociacoesView');
        this.messageView = new MessageView('#mensagemView');
        this.negotiationService = new NegotiationService();
        this.negotiationsView.update(this.negotiations);
    }
    adds() {
        const negotiation = Negotiation.createOf(this.inputDate.value, this.inputQtde.value, this.inputValue.value);
        if (!this.isWeekday(negotiation.date)) {
            this.messageView.update("Negociações são valdias apenas em dias uteis.");
            return;
        }
        this.negotiations.addsNegotiation(negotiation);
        print(negotiation, this.negotiations);
        this.clearForm();
        this.updateViews();
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputQtde.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateViews() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negociação adicionada");
    }
    importNegotiations() {
        this.negotiationService.getNegotiationsOfDay()
            .then(negotiationsOfDay => {
            return negotiationsOfDay.filter(negotiationsOfDay => {
                return !this.negotiations.listNegotiation().some(negotiation => negotiation.isEquals(negotiationsOfDay));
            });
        })
            .then(negotiationNow => {
            for (let n of negotiationNow) {
                this.negotiations.addsNegotiation(n);
            }
            this.negotiationsView.update(this.negotiations);
        });
    }
    isWeekday(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }
}
__decorate([
    domInjector('#data')
], NegotiationController.prototype, "inputDate", void 0);
__decorate([
    domInjector('#quantidade')
], NegotiationController.prototype, "inputQtde", void 0);
__decorate([
    domInjector('#valor')
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    inspect,
    loginExecutionTime()
], NegotiationController.prototype, "adds", null);
