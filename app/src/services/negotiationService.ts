import { NegotiationOfDay } from "../interfaces/negotiationOfDay.js";
import { Negotiation } from "../models/negotiation.js";

export class NegotiationService {

    /**
     * Retrieves a list of Negotiations for the current day from a remote server.
     * 
     * @returns - A Promise that resolves to an array of Negotiation objects.
     * @throws - If the network request fails or the response cannot be parsed.
     */
    public getNegotiationsOfDay(): Promise<Negotiation[]>{
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((values: NegotiationOfDay[]) => {
                return values.map((value) => {
                    return new Negotiation(new Date, value.vezes, value.montante);
                })
            })
    }
}