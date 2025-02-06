document.addEventListener("DOMContentLoaded", function() {
    const entrar = document.getElementById("btnEntrar");
    const login = document.getElementById("txtLogin");
    const senha = document.getElementById("txtSenha");
    const senhaValidacao = document.getElementById("txtSenhaValidacao");

    entrar.addEventListener("click", function(){
        for(login in usuarios) {
            if(login == usuarios.login) {
                alert("Usuário já cadastrado");
                return;
            }
        }
        
        if(login.value == "" || senha.value == "" || senhaValidacao.value == "") {
            alert("Nome ou senha não preenchidos");

        } else if (senha.value != senhaValidacao.value) {
            alert("Senhas não conferem");

        } else {
            var usuarios = 
            {"login": login.value, "senha": senha.value};
            
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
    });
});