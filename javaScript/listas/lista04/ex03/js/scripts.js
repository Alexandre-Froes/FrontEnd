function numAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return parseInt(Math.random() * (max - min + 1)) + min;
}

var aleatorio = numAleatorio(0, 9);

console.log(aleatorio)
document.write(aleatorio);