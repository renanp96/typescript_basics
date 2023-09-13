export class Negotiation {
    constructor(
        private readonly _date: Date,
        public readonly qtde: number,
        public readonly value: number
    ) {}

    public get date(): Date {
        const date = new Date(this._date.getTime());
        return date;
    }

    public get volume(): number {
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
    public static createOf(dateStr: string, qtdeStr: string, valorStr: string): Negotiation {
        const exp = /-/g;
        const date = new Date(dateStr.replace(exp, ','));
        const qtde = parseInt(qtdeStr);
        const value = parseFloat(valorStr);

        return new Negotiation(date, qtde, value);
    }
}