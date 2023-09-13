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
    /**
     * Creates a new Negotiation object from string representatios of date, quantity, and value.
     *
     * @param {string} dateStr - A string representing the date in "YYYY-MM-DD".
     * @param {string} qtdeStr - A string representing the quantity.
     * @param {string} valorStr - A string representing the value.
     * @returns {Negotiation}
     */
    static createOf(dateStr, qtdeStr, valorStr) {
        const exp = /-/g;
        const date = new Date(dateStr.replace(exp, ','));
        const qtde = parseInt(qtdeStr);
        const value = parseFloat(valorStr);
        return new Negotiation(date, qtde, value);
    }
}
