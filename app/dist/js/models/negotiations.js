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
    toString() {
        return JSON.stringify(this.negotiations, null, 0);
    }
    isEquals(object) {
        return JSON.stringify(this.negotiations) === JSON.stringify(object.listNegotiation());
    }
}
//# sourceMappingURL=negotiations.js.map