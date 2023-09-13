import { NegotiationController } from "./src/controllers/negotiation-controller.js";

const controller = new NegotiationController();
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adds();
    });
} else {
    throw Error("Erro ao iniciar a aplicação! Verefique se form foi declarado corretamente.");
}
