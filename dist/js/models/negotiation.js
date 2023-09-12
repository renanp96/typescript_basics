export class Negotiation {
    constructor(date, qtde, value) {
        this.date = date;
        this.qtde = qtde;
        this.value = value;
    }
    get volume() {
        return this.qtde * this.value;
    }
}
