import { NegotiationController } from "./controllers/negotiation-controller.js";

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

const importBtn = document.querySelector('#botao-importa');
if(importBtn){
    importBtn.addEventListener('click', () => {
        controller.getNegotiationValues();
    });
} else {
    throw new Error("Botão não foi encontrado ou instanciado");
    
}