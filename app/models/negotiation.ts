export class Negotiation {
    constructor(
        public readonly date: Date, 
        public readonly qtde: number, 
        public readonly value: number) {}

    get volume(): number {
        return this.qtde * this.value;
    }
}