function numAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return paeseInt(Math.random() * (max - min + 1)) + min;
}

var alfabeto = "abcdefghijklmnopqrstuvwxyz";
var letras = [];
var numeros = [];

for(i = 0; i < 4; i++){
    var aleatorio = numAleatorio(0, alfabeto.length - 1);
    letras[i] = alfabeto.charAt(aleatorio);
}
for(i = 0; i < 4; i++){
    numeros[i] = numAleatorio(0, 9);
}

console.log(letras);
console.log(numeros);