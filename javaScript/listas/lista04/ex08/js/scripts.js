function numAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return parseInt(Math.random() * (max - min + 1)) + min;
}

var alfabeto = "abcdefghijklmnopqrstuvwxyz";
var senhaConteudo = [
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    [0,1,2,3,4,5,6,7,8,9]
]

var senha = [];

for (i = 0; i < 8; i++) {
    var linhaSenha = numAleatorio(0, 2);
    var colunaSenha = 0;

    if (linhaSenha == 2) {
        senha[i] = senhaConteudo[linhaSenha][numAleatorio(0, 9)];
    } else {
        senha[i] = senhaConteudo[linhaSenha][numAleatorio(0, 25)];
    }
}

for(i in senha) {
    console.log(senha[i]);
    document.write(`<span>${senha[i]}</span>`);
}