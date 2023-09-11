export class Negotiation {
    #date;
    #qtde;
    #value;
    
    constructor(date, qtde, value){
        this.#date = date;
        this.#qtde = qtde;
        this.#value = value;
    }

    getDate() {
        return this.#date;
    }

    getQtde(){
        return this.#qtde;
    }

    getValue(){
        return this.#value();
    }

    getVolume(){
        return this.#qtde * this.#value;
    }
}