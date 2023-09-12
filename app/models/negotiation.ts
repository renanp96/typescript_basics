export class Negotiation {
    private _date: Date;
    private _qtde: number;
    private _value: number;

    constructor(date: Date, qtde: number, value: number) {
        this._date = date;
        this._qtde = qtde;
        this._value = value;
    }

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