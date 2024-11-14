var boneco = document.getElementById("boneco");
var texto = document.getElementById("txt");

boneco.addEventListener("mouseenter", function() {
    texto.innerHTML = "O que você quer??";
    boneco.src = "img/assustado.png";
});

boneco.addEventListener("mouseleave", function() {
    boneco.src = "img/pensativo.png";
    texto.innerHTML = "zzzzzzzzzzzzzzzz";
});

boneco.addEventListener("click", function() {
    var nome = prompt("Qual seu nome?");
    if(nome == undefined || nome == null || nome == "") {
        boneco.src = "img/nervoso.png"
        texto.innerHTML = "Não me faça perder meu tempo!"
    } else {
        boneco.scr = "img/alegre.png";
        texto.innerHTML = `${nome}, seja bem vindo!`
    }
});

boneco.addEventListener("click", function() {});
