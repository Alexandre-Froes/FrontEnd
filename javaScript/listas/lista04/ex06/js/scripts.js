function numAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return parseInt(Math.random() * (max - min + 1)) + min;
}

var numeros = [];

for(i = 0; i < 4; i++){
    numeros[i] = numAleatorio(0, 9);
}

console.log(numeros);