window.addEventListener("DOMContentLoaded", function() {
    var informacoes = JSON.parse(localStorage.getItem("informacoes"));

    if(informacoes == null || informacoes == undefined) {
        window.location.href = "usuarioNaoCadastrado.html"; 
    }

    var nome = informacoes.nome;
    var sobrenome = informacoes.sobrenome;

    var nomeCompleto = document.getElementById("nomeCompleto");
    var user = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    var aplicacao = document.getElementById("aplicacao");

    var senhaNome = nome.split('');
    var senhaSobrenome = sobrenome.split('');

    senhaNome = nome[0];
    senhaSobrenome = sobrenome[0];

    var senhaCompleta = senhaNome + senhaSobrenome;

    nomeCompleto.innerHTML = `${nome} ${sobrenome}`;
    user.innerHTML = `${nome.toUpperCase()}`;
    senha.innerHTML = `${senhaCompleta.toUpperCase()}`;

    switch(informacoes.idade) {
        case "Entre 19 a 21 anos":  
            aplicacao.innerHTML = "Renda Fixa";
            break;
        case "Entre 22 a 30 anos": 
            aplicacao.innerHTML = "Ações";
            break;
        case "31 anos ou mais": 
            aplicacao.innerHTML = "Fundo de Investimento Imobiliário";
            break;
    }
        
});