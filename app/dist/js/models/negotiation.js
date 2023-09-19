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
    toString() {
        return `Data: ${this.date},\n Quantidade: ${this.qtde},\n Valor: ${this.value}`;
    }
    static createOf(dateStr, qtdeStr, valorStr) {
        const exp = /-/g;
        const date = new Date(dateStr.replace(exp, ','));
        const qtde = parseInt(qtdeStr);
        const value = parseFloat(valorStr);
        return new Negotiation(date, qtde, value);
    }
}
