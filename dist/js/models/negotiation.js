export class Negotiation {
    constructor(_date, _qtde, _value) {
        this._date = _date;
        this._qtde = _qtde;
        this._value = _value;
    }
    getDate() {
        return this._date;
    }
    getQtde() {
        return this._qtde;
    }
    getValue() {
        return this._value;
    }
    getVolume() {
        return this._qtde * this._value;
    }
}
