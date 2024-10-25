function numAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return parseInt(Math.random() * (max - min + 1)) + min;
}

var alfabeto = "abcdefghijklmnopqrstuvwxyz";
var aleatorio = numAleatorio(0, alfabeto.length - 1);

console.log(alfabeto.charAt(aleatorio));