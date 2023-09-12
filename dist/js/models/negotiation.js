export class Negotiation {
    constructor(_date, qtde, value) {
        this._date = _date;
        this.qtde = qtde;
        this.value = value;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    get volume() {
        return this.qtde * this.value;
    }
}
