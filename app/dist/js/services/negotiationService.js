import { Negotiation } from "../models/negotiation.js";
export class NegotiationService {
    getNegotiationsOfDay() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((values) => {
            return values.map((value) => {
                return new Negotiation(new Date, value.vezes, value.montante);
            });
        });
    }
}
