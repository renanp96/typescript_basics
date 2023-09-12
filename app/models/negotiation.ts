export class Negotiation {
    constructor(
        private _date: Date, 
        private _qtde: number, 
        private _value: number) {}

    getDate(): Date {
        return this._date;
    }

    getQtde(): number {
        return this._qtde;
    }

    getValue(): number {
        return this._value;
    }

    getVolume(): number {
        return this._qtde * this._value;
    }
}