window.addEventListener("DOMContentLoaded", function() {
    const texto = document.getElementById("texto");
    
    var frase = prompt("Digite uma frase completa:");
    var letra = prompt("Digite uma letra:")
    
    var fraseDividida = frase.split(" ");
    var fraseCorreta = [];
    var palavraCorreta;

    for(var i = 0; i < fraseDividida.length; i++)  {
        if(fraseDividida[i].charAt(0) != letra) {
            fraseCorreta.push(fraseDividida[i]);
            
        }
    }

    document.write(`<p>${fraseCorreta.toString()}</p>`)
});
