var frase = prompt("Digite uma frase qualquer:");

var letra = prompt("Digite uma letra:");

var fraseDividida = frase.split(" ")

for(var i in fraseDividida) {
    if(fraseDividida[i].charAt(0) == letra) 
        document.write(`<p>${fraseDividida[i]}</p>`);
}