//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();

let opcao = 0;
while (opcao !== 4) {
  console.log("Menu:");
  console.log("1. Opção 1");
  console.log("2. Opção 2");
  console.log("3. Opção 3");
  console.log("4. Sair");
""
  opcao = Number(prompt("Escolha uma opção: "));

  switch (opcao) {
    case 1:
      console.log("Você escolheu a Opção 1.");
      break;
    case 2:
      console.log("Você escolheu a Opção 2.");
      break;
    case 3:
      console.log("Você escolheu a Opção 3.");
      break;
    case 4:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}
