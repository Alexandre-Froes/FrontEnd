document.addEventListener("DOMContentLoaded", function() {
    const entrar = document.getElementById("btnEntrar");
    const login = document.getElementById("txtLogin");
    const senha = document.getElementById("txtSenha");

    const somErro = new Audio("audio/erro.mp3");
    const somSucesso = new Audio("audio/sucesso.mp3");

    var usuarios = JSON.parse(localStorage.getItem("usuarios"));

    entrar.addEventListener("click", function(){
        if (senha.value == "" || login.value == "") {
            msgUser("erro", "Preencha todos os campos.");
            return;
            
        }

        let usuarioEncontrado = null;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].login === login.value) {
                usuarioEncontrado = usuarios[i];
                break;
            }
        }
        
        if(!usuarioEncontrado) {
            msgUser("erro", "Usuário não encontrado.");

        } else if (usuarioEncontrado.login == login.value 
        && usuarioEncontrado.senha == senha.value) {
            window.location.href = "../lista10/index.html";

        } else {
            msgUser("erro", "Usuário ou senha inválidos.");
        }
    });

    function msgUser(tipo, msg) {
        var som = tipo == "erro" ? somErro.play() : somSucesso.play();
        alert(msg);
    }
});