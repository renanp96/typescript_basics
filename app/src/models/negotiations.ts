import { Negotiation } from "./negotiation.js";

export class Negotiations {
    private negotiations: Array<Negotiation> = []; //or Negotiation[] for a more simple using.

    addsNegotiation(negotiation: Negotiation) {
        this.negotiations.push(negotiation);
    }

    listNegotiation(): readonly Negotiation[] {
        return this.negotiations;
    }
}
