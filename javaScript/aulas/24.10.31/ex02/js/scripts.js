var nome = prompt("Digite seu nome completo");

document.write(`<p>O nome ${nome} possui ${nome.length} caracteres</p>`);

document.write(`<p>A primeira letra do nome: ${nome} é ${nome.charAt(0)}.</p>`); 

document.write(`<p>Seu nome completo maiusculo é ${nome.toUpperCase()}.</p>`); 

document.write(`<p>Seu nome completo minusculo é ${nome.toLowerCase()}.</p>`);

var nomeCompletoDividido = nome.split(" ");

var primeiroNome = nomeCompletoDividido[0];
document.write(`<p>Seu primeiro nome é ${primeiroNome}.</p>`); 

var ultimoNome = nomeCompletoDividido[nomeCompletoDividido.length - 1];
document.write(`<p>Seu ultimo sobrenome é ${ultimoNome}.</p>`);

var primeiroUltNome = primeiroNome.concat(" ", ultimoNome);
document.write(`<p>Seu primeiro nome concatenado com o último é: ${primeiroUltNome}.</p>`); 

document.write(`<p>Seu primeiro nome concatenado com o último é: ${primeiroUltNome.toUpperCase()}.</p>`);

document.write(`<p>Seu nome tem: ${nomeCompletoDividido.length} palavras.</p>`); 

var letrasInicial = [];

for(i in nomeCompletoDividido)
    letrasInicial.push(nomeCompletoDividido[i].charAt(0));

var iniciaisJuntas = letrasInicial.join("");

document.write(`<p>As inicias juntas e maiusculas são: ${iniciaisJuntas.toUpperCase()}.</p>`)