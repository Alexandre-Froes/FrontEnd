window.addEventListener("DOMContentLoaded", function() {
    var nivel = document.getElementById("nivel");
    var minutos = document.getElementById("minutos");
    var segundos = document.getElementById("segundos");
    var btnIniciar = document.getElementById("btnIniciar");
    var btnPausar = document.getElementById("btnPausar");
    var btnParar = document.getElementById("btnParar");
    var numero = document.getElementById("numero");
    var acertos = document.getElementById("acertos");
    var acertosPorcentagem = document.getElementById("acertosPorcentagem");
    var erros = document.getElementById("erros");
    var numPares = document.getElementById("numPares");

    var numeroAtual = 0;
    var acertosAtuais = 0;
    var errosAtuais = 0;
    var paresAtuais = 0;
    var nivelSelecionado = "";
    var intervaloJogo;
    var intervaloTempo;
    var timeoutMinuto;

    function gerarNumero() {
        numeroAtual = Math.floor(Math.random() * 100) + 1;
        numero.innerHTML = numeroAtual;
        numero.style.color = "black";

        if (numeroAtual % 2 == 0) {
            paresAtuais++;
            numPares.innerHTML = paresAtuais;
        }
        
        numero.disabled = false;
    }

    function clicarNumero() {
        var valorNumero = parseInt(numero.innerHTML);
        
        if (valorNumero % 2 == 0) {
            numero.style.color = "green";
            acertosAtuais++;
        } else {
            numero.style.color = "red";
            errosAtuais++;
        }
        
        numero.disabled = true;
        acertos.innerHTML = acertosAtuais;
        erros.innerHTML = errosAtuais;
        atualizarPorcentagem();
    }

    function atualizarPorcentagem() {
        var porcentagem = paresAtuais > 0 ? ((acertosAtuais / paresAtuais) * 100).toFixed(2) : 0;
        acertosPorcentagem.innerHTML = porcentagem + "%";
    }

    function diminuirSegundo() {
        segundos.innerHTML--;
        if (segundos.innerHTML == 0 && minutos.innerHTML == 0) {
            pausarJogo();
        }
    }

    function diminuirMinuto() {
        minutos.innerHTML--;
        segundos.innerHTML = 59;
    }

    function iniciarTemporizador() {
        clearInterval(intervaloTempo);
        intervaloTempo = setInterval(diminuirSegundo, 1000);
    }

    function configurarNivel() {
        nivelSelecionado = nivel.value;
        
        if (nivelSelecionado == "facil") {
            minutos.innerHTML = 1;
            segundos.innerHTML = 30;
        } 
        else if (nivelSelecionado == "medio") {
            minutos.innerHTML = 1;
            segundos.innerHTML = 15;
        } 
        else if (nivelSelecionado == "dificil") {
            minutos.innerHTML = 0;
            segundos.innerHTML = 30;
        } 
        else {
            minutos.innerHTML = 0;
            segundos.innerHTML = "00";
        }
    }

    function iniciarJogo(velocidade) {
        clearInterval(intervaloJogo);
        iniciarTemporizador();
        
        if (velocidade == 500) {
            intervaloJogo = setInterval(gerarNumero, velocidade);
            return;
        } else if (velocidade == 750) {
            intervaloJogo = setInterval(gerarNumero, velocidade);
            return;
        } else if (velocidade == 1250) {
            intervaloJogo = setInterval(gerarNumero, velocidade);
            return;
        }
        
        timeoutMinuto = setTimeout(function() {
            diminuirMinuto();
            intervaloJogo = setInterval(gerarNumero, velocidade);
        }, velocidade == 1250 ? 30000 : 15000);
    }

    function pausarJogo() {
        clearInterval(intervaloJogo);
        clearInterval(intervaloTempo);
        clearTimeout(timeoutMinuto);
    }

    function reiniciarJogo() {
        pausarJogo(); 
        nivel.disabled = false;
        nivel.value = "selecione";
        nivelSelecionado = nivel.value;
        
        acertosAtuais = 0;
        errosAtuais = 0;
        paresAtuais = 0;
        
        minutos.innerHTML = 0;
        segundos.innerHTML = "00";
        acertos.innerHTML = 0;
        erros.innerHTML = 0;
        numPares.innerHTML = 0;
        acertosPorcentagem.innerHTML = "0.00%";
        numero.innerHTML = "_";
        numero.disabled = true;
    }

    nivel.addEventListener("change", configurarNivel);
    
    numero.addEventListener("click", clicarNumero);
    numero.disabled = true;

    btnIniciar.addEventListener("click", function() {
        if (!nivelSelecionado || nivelSelecionado == "selecione") {
            alert("Selecione o nível do jogo");
            return;
        }
        
        nivel.disabled = true;
        var velocidades = {
            facil: 1250,
            medio: 750,
            dificil: 500
        };
        iniciarJogo(velocidades[nivelSelecionado]);
    });

    btnPausar.addEventListener("click", pausarJogo);
    btnParar.addEventListener("click", reiniciarJogo);
});