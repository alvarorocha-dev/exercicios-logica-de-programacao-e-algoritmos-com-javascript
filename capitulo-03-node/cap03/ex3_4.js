const prompt = require("prompt-sync")();

const pesoRacao = Number(prompt("Peso da ração em kg:"));
const consumoDiario = Number(prompt("Consumo diário do gato em gr:"));

const racaoKg = pesoRacao * 1000;
const dias = Math.floor(racaoKg / consumoDiario);
const sobra = racaoKg % consumoDiario;

console.log(`A ração é suficiente para ${dias} dia(s) e sobra ${sobra} gr.`);
