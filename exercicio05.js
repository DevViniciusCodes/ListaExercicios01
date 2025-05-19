//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

// O IMC é calculado dividindo o peso (em kg) pela altura (em metros) ao quadrado.
// As categorias de peso são definidas da seguinte forma:

const prompt = require("prompt-sync")();

let peso = Number(prompt("Digite o peso em kg: "));
let altura = Number(prompt("Digite a altura em metros: "));

let imc = peso / (altura * altura);
console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log("Baixo peso");
} else if (imc >= 18.5 && imc < 24.9) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 29.9) {
  console.log("Sobrepeso");
} else if (imc >= 30) {
  console.log("Obesidade");
} else {
  console.log("Valor inválido");
}
