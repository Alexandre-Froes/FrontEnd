nota1 = parseFloat(prompt("Por favor insira a nota do primeiro bimestre:"));
nota2 = parseFloat(prompt("Por favor insira a nota do segundo bimestre:"));

total = nota1 + nota2;

if (total >= 60 )
    alert(`Parabéns, você passou de bimestre!`);
else
    alert(`Que pena, ainda faltam ${60 - total} pontos para passar de bimestre!`)