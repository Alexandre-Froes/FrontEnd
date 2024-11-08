var frase = prompt("Digite a frase completa você deseja trocar uma palavra:");

var plvErrada = prompt("Digite a palavra a ser substituida:");
var plvCerta = prompt("Digite a palavra que vai tomar seu lugar:");

document.write(`<p>${frase.replaceAll(plvErrada, plvCerta)}</p>`);