nome = prompt("Qual seu nome?");
sobrenome = prompt("Qual seu sobrenome?");
cor = prompt("Me fale sua cor favorita, em código HEX, sem o #");
num = prompt("Me fale um número e veja a magica acontecer!");

for (i=1; i<=num; i++)
    if(i % 2 == 0){
        document.write(`<p style="color: #${cor}">${nome.concat(" ", sobrenome)}</p>`);
    } else 
        document.write(`<p style="color: #00">${nome.concat(" ", sobrenome)}</p>`);