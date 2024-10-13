function numAleatorio(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function comprarCartas(n, cartas) {
    for(var i = n; i < n + 3; i++) {
        document.write(`    <img src="cartas/carta${cartas[i]}.png" alt="carta${cartas[i]}">`)
    }
}

var cartas = [];

for(var i = 0; i < 12; i++) {
    var cartaAleatoria = numAleatorio(1, 27);

    if (!cartas.includes(cartaAleatoria)) {
        cartas.push(cartaAleatoria);

    } else {
        i--;
    }
}

for(var i = 0; i < 12; i+= 3) {
    document.write(`<div class="jogoBaralho">`);
    document.write(`    <p>Cartas do jogador ${(i + 3) / 3}: </p>`);
    comprarCartas(i, cartas);
    document.write(`</div>`);
}