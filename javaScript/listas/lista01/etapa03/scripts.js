nome = prompt("Insira seu nome completo");

idade = prompt("Insira sua idade");

if (idade >= 18 )
    alert(`${nome} você já POSSUI idade para tirar carteira`);
else
    alert(`${nome} você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${18 - idade} anos.`)