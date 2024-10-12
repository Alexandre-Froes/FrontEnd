function numAleatorio(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var min = 10;
var max = 50

var aleatorio = numAleatorio(min, max);

document.write(`<span class="aleatorio">${aleatorio}</span>`);