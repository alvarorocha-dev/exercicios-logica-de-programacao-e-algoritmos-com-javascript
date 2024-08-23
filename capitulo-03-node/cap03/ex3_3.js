const prompt = require("prompt-sync")();

const salario = Number(prompt("Salario do funcionário:"));
const anos = Number(prompt("Anos de trabalho:"));

const premio = Math.floor(anos / 4);

const total = (salario * premio) / 100 + salario;

console.log(`Salário mais o prêmio por quadriênio: ${total.toFixed(2)}`);
