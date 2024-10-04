const dataAtual = new Date();

var diaSemana = dataAtual.getDay(); 

var arraySemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

document.write(`Hoje é ${arraySemana[diaSemana]}!`);