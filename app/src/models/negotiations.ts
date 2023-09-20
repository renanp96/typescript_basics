import { Model } from "../interfaces/model.js";
import { Negotiation } from "./negotiation.js";

export class Negotiations implements Model<Negotiations> {
    private negotiations: Negotiation[] = [];

    public addsNegotiation(negotiation: Negotiation) {
        this.negotiations.push(negotiation);
    }

    public listNegotiation(): readonly Negotiation[] {
        return this.negotiations;   
    }

    public toString(): string {
        return JSON.stringify(this.negotiations, null, 0);
    }

    public isEquals(object: Negotiations): boolean {
        return JSON.stringify(this.negotiations) === JSON.stringify(object.listNegotiation());
    }
}
