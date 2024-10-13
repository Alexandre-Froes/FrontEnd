function numAleatorio(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var min = 1;
var max = 3;

var pedra = `<i class="fa-solid fa-hand-fist"></i>`;
var tesoura = `<i class="fa-regular fa-hand-peace"></i>`;
var papel = `<i class="fa-regular fa-file"></i>`;

var valores = [pedra, papel, tesoura];

var jog1 = numAleatorio(min, max);
var jog2 = numAleatorio(min, max);

document.write(`<p class="jogoPPT">Jogador 1 jogou: <br>${valores[jog1 - 1]}</p>`);
document.write(`<p class="jogoPPT">Jogador 2 jogou: <br>${valores[jog2 - 1]}</p>`);

if(jog1 == jog2) {
    document.write(`<p class="jogoPPT">O jogo EMPATOU</p>`);
} else if((jog1 == 1 && jog2 == 3) || (jog1 == 2 && jog2 == 1) || (jog1 == 3 && jog2 == 2)) {
    document.write(`<p class="jogoPPT">Jogador 1 venceu</p>`);
} else {
    document.write(`<p class="jogoPPT">Jogador 2 venceu</p>`);
} 
