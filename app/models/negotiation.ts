export class Negotiation {
    constructor(
        private readonly _date: Date,
        public readonly qtde: number,
        public readonly value: number
    ) {}

    get date(): Date {
        const date = new Date(this._date.getTime());
        return date;
    }

    get volume(): number {
        return this.qtde * this.value;
    }
}