window.addEventListener("DOMContentLoaded", function() {
const exibir = msg => alert(msg);

const somaEhPar = (x,y) => ((x+y)%2 == 0);

exibir(somaEhPar(10,21));
})