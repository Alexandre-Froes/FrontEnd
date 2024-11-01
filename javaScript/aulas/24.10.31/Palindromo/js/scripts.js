function inverterPalavra (str) {
    return str.split("").reverse().join("");
}

var palavra = prompt("Digite uma palavra ou frase para verificar se ela é palíndromo:");

var palavraInvetida = inverterPalavra(palavra);

(palavraInvetida.replaceAll(" ", "") == palavra.replaceAll(" ", ""))?alert("A palavra ou frase é um palíndromo"):alert("A palavra ou frase não é palíndromo");