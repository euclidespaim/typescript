import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 300);
console.log(negociacao);
console.log(negociacao.volume);