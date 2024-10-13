function numAleatorio(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var idade = [];
var nome = [];
var somaIdades = 0;

var qtdPassageiros = parseInt(prompt("Digite a quantidade de passageiros para viagem:"));

for(i = 0; i < qtdPassageiros; i++) {
    nome[i] = prompt(`Passageiro ${i + 1}, qual o seu nome?`);
    idade[i] = parseInt(prompt(`${nome[i]} Qual a sua idade?`));

    somaIdades += idade[i];
}

var min = 1;
var max;

var aleatorio = numAleatorio(min, qtdPassageiros);

document.write(`<p class="sorteio"> Parabéns ${nome[aleatorio - 1]}, Você ganhou o sorteio!</p>`);
document.write(`<p class="sorteio">A média das idades dos passageiros é: ${(somaIdades / qtdPassageiros).toFixed(2)}</p>`);