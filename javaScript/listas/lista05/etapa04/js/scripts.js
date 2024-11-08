var nome = prompt("Qual seu nome completo?").trim();
var nomeDividido = nome.split(" ");

var primeiroNome = nomeDividido[0];
nomeDividido.shift();

var restoNomes = nomeDividido.join(" ");

document.write(`<p>${primeiroNome.toUpperCase().concat(" ", restoNomes.toLocaleLowerCase())}</p>`);