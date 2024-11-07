var nome = prompt("Qual seu nome completo?").trim();

var nomeDividido = nome.split(" ");

document.write(`<p>No seu nome há ${nomeDividido.length} palavras</p>`);