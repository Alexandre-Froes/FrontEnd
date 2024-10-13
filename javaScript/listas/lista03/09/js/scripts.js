function numAleatorio(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function embaralharArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = numAleatorio(0, i);

        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }

    return array;
}

var n = parseInt(prompt("Qual o número de pessoas que irão apresentar?"));

var nomes = [];

for(var i = 0; i < n; i++) {
    nomes[i] = prompt(`Digite o nome da pessoa nmro ${i + 1}:`);
}

nomes = embaralharArray(nomes);

document.write(`<div class="nomesSorteioApresentacao">`);

for(var i = 0; i < n; i++) {
    document.write(`    <p>${i + 1}: ${nomes[i]}</p>`);
}
document.write(`</div>`);