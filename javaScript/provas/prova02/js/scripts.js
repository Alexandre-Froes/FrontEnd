window.addEventListener("DOMContentLoaded", function() {
    var nome = document.getElementById("txtNome");
    var sobrenome = document.getElementById("txtSobrenome");
    var idade = document.getElementById("txtIdade");
    var cadastro = document.getElementById("btnCadastro");
    var imgCadastro = document.getElementById("imgValidacao");
    var txtValidacao = document.getElementById("textoValidacao");

    cadastro.addEventListener("click", function() {
        if (nome.value == "" || sobrenome.value == "") {    
            mensagemErro("Nome e sobrenome devem ser informados");

        } else if (idade.value == "Selecione") {
            mensagemErro("Selecione a sua faixa etária");

        } else if(idade.value == "Entre 0 a 12 anos" || idade.value == "Entre 13 a 18 anos") {
            mensagemErro(`${nome.value.toUpperCase()}
            ${sobrenome.value.toUpperCase()} 
            você não tem idade suficiente` );

        } else {
            txtValidacao.style = "color: darkblue";  
            mudarInformacao("Processando. Aguarde (5 segundos)");
            imgCadastro.src = "img/processando.gif"

            var informacoes = {"nome": nome.value, "sobrenome": sobrenome.value, "idade": idade.value};
            localStorage.setItem("informacoes", JSON.stringify(informacoes));

            setTimeout(trocarPagina, 5000);
        }
    });

    function mudarInformacao(msg) {
        txtValidacao.innerHTML = msg;
    }

    function inputClick (input) {
        input.addEventListener("click", function() {
            mensagemErro("* Favor preencher todos os campos acima");
        });
    }

    function mensagemErro(msg) {
        inputClick(idade);
        inputClick(nome);
        inputClick(sobrenome);

        mudarInformacao(msg);
        txtValidacao.style = "color: darkred";  
        imgCadastro.src = "img/erro.png";
    }

    function trocarPagina() {
        window.location.href = "processa.html";
    }
});