import { Printable } from "../utils/printable.js";
import { Negotiation } from "./negotiation.js";

export class Negotiations implements Printable {
    private negotiations: Negotiation[] = []; //or Negotiation[] for a more simple using.

    public addsNegotiation(negotiation: Negotiation) {
        this.negotiations.push(negotiation);
    }

    public listNegotiation(): readonly Negotiation[] {
        return this.negotiations;   
    }
}
