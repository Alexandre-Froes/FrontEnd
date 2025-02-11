document.addEventListener("DOMContentLoaded", function() {
    const entrar = document.getElementById("btnEntrar");
    const login = document.getElementById("txtLogin");
    const senha = document.getElementById("txtSenha");
    const senhaValidacao = document.getElementById("txtSenhaValidacao");

    const somErro = new Audio("audio/erro.mp3");
    const somSucesso = new Audio("audio/sucesso.mp3");

    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    entrar.addEventListener("click", function(){
        var usuarioExistente = false;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].login === login.value) {
                usuarioExistente = true;
                break;
            }
        }
        if (usuarioExistente) {
            msgUser("erro", "Usuário já cadastrado");
        } else if(login.value == "" || senha.value == "" || senhaValidacao.value == "") {
            msgUser("erro", "Preencha todos os campos");

        } else if (senha.value != senhaValidacao.value) {
            msgUser("erro", "Senhas não conferem");

        } else {
            msgUser("sucesso", "Usuario cadastrado com sucesso!");

            var novoUser = 
            {login: login.value, senha: senha.value};
            usuarios.push(novoUser);
            
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
    });

    function msgUser(tipo, msg) {
        var som = tipo == "erro" ? somErro.play() : somSucesso.play();
        alert(msg);
    }
});