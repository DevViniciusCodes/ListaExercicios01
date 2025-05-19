//Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for

const prompt = require("prompt-sync")();

let n = 10; // Número de termos da sequência de Fibonacci
let fibonacci = [0, 1]; // Inicializa a sequência com os dois primeiros termos
console.log("Sequência de Fibonacci:");
console.log(fibonacci[0]); // Imprime o primeiro termo
console.log(fibonacci[1]); // Imprime o segundo termo
for (let i = 2; i < n; i++) {
  // Calcula o próximo termo da sequência
  let proximoTermo = fibonacci[i - 1] + fibonacci[i - 2];
  fibonacci.push(proximoTermo); // Adiciona o próximo termo à sequência
  console.log(proximoTermo); // Imprime o próximo termo
}
// O programa inicializa a sequência de Fibonacci com os dois primeiros termos (0 e 1) e, em seguida, utiliza um loop for para calcular e imprimir os próximos 8 termos da sequência. A cada iteração, o próximo termo é calculado como a soma dos dois termos anteriores e adicionado à lista de Fibonacci. O resultado é impresso na tela.
// O programa exibe os primeiros 10 números da sequência de Fibonacci, que são: 0, 1, 1, 2, 3, 5, 8, 13, 21 e 34.
