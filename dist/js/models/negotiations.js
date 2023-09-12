export class Negotiations {
    constructor() {
        this.negotiations = []; //or Negotiation[] for a more simple using.
    }
    addsNegotiation(negotiation) {
        this.negotiations.push(negotiation);
    }
    listNegotiation() {
        return this.negotiations;
    }
}
