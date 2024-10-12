function numAleatorio(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var min = prompt("Digite um número mínimo real para o valor aleatório:");
var max = prompt("Digite um número máximo real para o valor aleatório:");

var aleatorio = numAleatorio(min, max);

document.write(`<span class="aleatorio">${aleatorio}</span>`);