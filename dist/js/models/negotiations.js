export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    addsNegotiation(negotiation) {
        this.negotiations.push(negotiation);
    }
    listNegotiation() {
        return this.negotiations;
    }
}
