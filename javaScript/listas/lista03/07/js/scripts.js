function numAleatorio(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var min = 1;
var max = 6;

var aleatorio = numAleatorio(min, max)

document.write(`<img class="dados" src="imagens/dado ${aleatorio}.png" alt="">`);
