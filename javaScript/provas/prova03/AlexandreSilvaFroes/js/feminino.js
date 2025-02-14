window.addEventListener("DOMContentLoaded", function() {
    const txtNomeCompleto = document.getElementById("txtNomeCompleto");
    const nomeCompletoParagrafo = document.getElementById("nomeCompleto");
    const caracteres = this.document.getElementById("caracteres");
    const palavras = this.document.getElementById("palavras");
    const primeiraPlv = this.document.getElementById("primeira");
    const ultimaPlv = this.document.getElementById("ultima");

    var usuario = JSON.parse(localStorage.getItem("usuario"));
    
    var nome = usuario.nome;
    var sobrenome = usuario.sobrenome;

    var nomeCompleto = nome.concat(" ", sobrenome);

    txtNomeCompleto.value = nomeCompleto;
    nomeCompletoParagrafo.innerHTML = nomeCompleto;
    
    var nomeCompletoTamanho = nomeCompleto.replaceAll(" ", "");
    caracteres.innerHTML = nomeCompletoTamanho.length;

    var nomeCompletoDividido = nomeCompleto.split(" ");
    primeiraPlv.innerHTML = nomeCompletoDividido[0];
    ultimaPlv.innerHTML = nomeCompletoDividido[nomeCompletoDividido.length - 1]

    palavras.innerHTML = nomeCompletoDividido.length;
});
