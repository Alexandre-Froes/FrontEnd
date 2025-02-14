window.addEventListener("DOMContentLoaded", function() {
    const btnMario = document.getElementById("btnMario");
    const btnLuigi = document.getElementById("btnLuigi");
    const personagem = document.getElementById("imgPersonagem");
    var ctgMarioDoc = document.getElementById("ctgMario");
    var ctgLuigiDoc = document.getElementById("ctgLuigi");

    var ctgMario = 1;
    var ctgLuigi = 1;
    
    btnLuigi.addEventListener("click", function() { trocarPersonagem("luigi") });
    
    btnMario.addEventListener("click", function() { trocarPersonagem("mario") });
    
    personagem.addEventListener("click", function() {
        if(personagem.alt == "mario") {
            ctgMarioDoc.innerHTML = ctgMario++;
            
        }  else {
            ctgLuigiDoc.innerHTML = ctgLuigi++;
        }
    });

    function trocarPersonagem(src) {
        personagem.src = `img/${src}.gif`;
        personagem.alt = src;
    }
});
