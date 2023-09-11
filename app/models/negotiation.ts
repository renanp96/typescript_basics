export class Negotiation {
    private _date;
    private _qtde;
    private _value;
    
    constructor(date, qtde, value){
        this._date = date;
        this._qtde = qtde;
        this._value = value;
    }

    getDate() {
        return this._date;
    }

    getQtde(){
        return this._qtde;
    }

    getValue(){
        return this._value;
    }

    getVolume(){
        return this._qtde * this._value;
    }
}