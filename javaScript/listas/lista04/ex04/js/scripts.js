function numAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return parseInt(Math.random() * (max - min + 1)) + min;
}

var alfabeto = "abcdefghijklmnopqrstuvwxyz";
var letras = [];

for(i = 0; i < 4; i++){
    var aleatorio = numAleatorio(0, alfabeto.length - 1);
    letras[i] = alfabeto.charAt(aleatorio).toUpperCase();
}

console.log(letras);