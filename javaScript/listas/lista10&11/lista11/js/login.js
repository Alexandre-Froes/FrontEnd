document.addEventListener("DOMContentLoaded", function() {
    const entrar = document.getElementById("btnEntrar");
    const login = document.getElementById("txtLogin");
    const senha = document.getElementById("txtSenha");

    var jsonObj = JSON.parse(localStorage.getItem("usuarios"));

    entrar.addEventListener("click", function(){
        if (senha.value == "" || login.value == "") {
            alert("Usuário ou senha não preenchidos.");
            
        } else if(login.value != jsonObj.login) {
            alert("Usuário não cadastrado.");

        } else if (jsonObj.login == login.value && jsonObj.senha == senha.value) {
            window.location.href = "../lista10/index.html";

        } else {
            alert("Usuário ou senha inválidos.");
        }
    });
});