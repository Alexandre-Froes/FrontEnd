function exibirMsg(msg) {
    alert(msg)
}
function escreverNome() {
    var nome = prompt("Digite seu nome")
    document.write(`<p>${nome}</p>`)
}
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = function() {exibirMsg("oiamigos")};
btn2.onmouseleave = function() {exibirMsg("oiamigos2")};
