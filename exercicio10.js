//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número inteiro: "));
let contador = 1;

while (contador <= 10) {
  console.log(`Número ${contador}: ${numero}`);
  contador++;
}
