var nomeDisciplinas = ["Projeto Sistema Web MVC e SQL","Algoritmos e Programação","Programação Orientada a Objetos 1","Fundamentos de Banco de Dados","JavaScript Básico"];

var abreviacaoDisciplinas = ["P2","AP","POO1","FBD","JSB"];

document.write(`<table>`);
document.write(`    <tr>`)
document.write(`        <th>Código</th>`)
document.write(`        <th>Disciplina</th>`)
document.write(`    </tr>`)

for (i = 0; i < nomeDisciplinas.length; i++) {
    document.write(`    <tr>`)
    document.write(`        <td>${abreviacaoDisciplinas[i]}</td>`)
    document.write(`        <td>${nomeDisciplinas[i]}</td>`)
    document.write(`    </tr>`)
}
document.write(`</table>`);
