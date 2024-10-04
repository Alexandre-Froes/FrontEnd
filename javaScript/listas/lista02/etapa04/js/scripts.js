var totalPassageiros = prompt("Quantos passageiros?");

var homem = [];
var mulher = [];
var nome;
var sexo;

for(i = 0; i < totalPassageiros; i++) {
    nome = prompt(`Qual o seu nome?`);
    sexo = prompt(`${nome}, qual o seu sexo? (H ou M)`);

    if (sexo == "H")
        homem.push(nome);
    else
        mulher.push(nome);
}

var maior;

if (homem.length > mulher.length) 
    maior = homem.length;
else
    maior = mulher.length;

document.write(`<table>`);

for(i = 0; i < maior; i++ ){
    document.write(`    <tr>`);
    if(homem[i] != undefined)
        document.write(`        <td><span>${homem[i]}</span></td>`);
    else document.write(`         <td><span>---</span></td>`);

    if(mulher != undefined)
        document.write(`        <td><span>${mulher[i]}</span></td>`);
    else document.write(`         <td><span>---</span></td>`);

    document.write(`    </tr>`);
}

document.write(`</table>`);