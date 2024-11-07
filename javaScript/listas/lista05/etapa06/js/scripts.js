var frase = prompt("Digite uma frase qualquer:");

var dividido = frase.split(" ");

document.write(dividido[0].concat(" ", dividido[dividido.length-1]));