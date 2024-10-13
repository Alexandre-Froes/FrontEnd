function numAleatorio(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var min = 1;
var max = 60;

var numerosMega = [];

for(var i = 0; i < 6; i++) {
    var aleatorio = numAleatorio(min, max);

    if (!numerosMega.includes(aleatorio)) {
        numerosMega.push(aleatorio);

    } else {
        i--;
    }
}
document.write(`<h1>Aqui estão 6 números aleatórios da mega sena:</h1>`);

for(var i in numerosMega) {
    document.write(`<p class="sorteio">${numerosMega[i]}</p>`);
}
