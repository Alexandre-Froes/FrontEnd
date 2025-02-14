window.addEventListener("DOMContentLoaded", function() {
    const btnEnviar = document.getElementById("btnEnviar");
    const psw = document.getElementById("txtPsw");
    const nome = document.getElementById("txtNome");
    const sobrenome = document.getElementById("txtSobrenome");
    const sexo = document.getElementById("txtSexo");

    var regex = /^(REC|RECUPERAÇÃO)-(Jsbásico):\(1\)(2|3|4|5){2}$/

    btnEnviar.addEventListener("click", function() {
        if(nome.value == null || sobrenome.value == null 
        || nome.value == "" || sobrenome.value == "") {
            alert("Favor informar o NOME e SOBRENOME");
        } else if (!regex.test(psw.value)){
            alert("Senha incorreta");
            console.log(psw.value)
        } else {
            var usuario = 
            {nome: nome.value, sobrenome: sobrenome.value};

            console.log(usuario);
            
            localStorage.setItem("usuario", JSON.stringify(usuario));
            console.log("ususario cadastrado");

            (sexo.value == "masculino") ? window.location.href = "masculino.html" : window.location.href="feminino.html";
        }
    });
});
