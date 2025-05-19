//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou equilátero.

/*
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B 
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)  
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)  
Triângulo equilátero: possui todos os lados iguais (A=B e B=C)
*/

const prompt = require("prompt-sync")();

let ladoA = Number(prompt("Digite o valor do lado A: "));
let ladoB = Number(prompt("Digite o valor do lado B: "));
let ladoC = Number(prompt("Digite o valor do lado C: "));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
  console.log("Os lados formam um triângulo.");

  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Tipo de triângulo: Equilátero");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Tipo de triângulo: Isósceles");
  } else {
    console.log("Tipo de triângulo: Escaleno");
  }
} else {
  console.log("Os lados não formam um triângulo.");
}

// O código acima lê três valores para os lados de um triângulo e verifica se eles formam um triângulo válido. Se formarem, ele determina o tipo de triângulo (Equilátero, Isósceles ou Escaleno) e exibe a informação correspondente. Caso contrário, informa que os lados não formam um triângulo.
