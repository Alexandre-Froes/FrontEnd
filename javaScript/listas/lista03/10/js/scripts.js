function numAleatorio(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var carta = numAleatorio(1, 27);

document.write(`<img src="cartas/carta${carta}.png" alt="">`);