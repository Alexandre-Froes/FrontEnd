window.addEventListener("DOMContentLoaded", () => {
    const pessoas = [
        {nome: "Ana", idade: 18, genero: "F", salario: 1000},
        {nome: "João", idade: 20, genero: "M", salario: 3000},
        {nome: "César", idade: 33, genero: "M", salario: 1900},
        {nome: "Maria", idade: 12, genero: "F", salario: 7000},
        {nome: "Zé", idade: 17, genero: "M", salario: 2400}
    ]
    console.table(pessoas);

    // nome e idade de maiores de idade
    pessoas.forEach(pessoa => {
        if(pessoa.idade >= 18) 
        console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}`);
    });

    // nome das pessoas com sexo masculino
    console.table(pessoas.filter(pessoa => pessoa.genero == "M"));

    // dados maior salario
    console.log();

    // se há alguma mulher que ganha mais que 5k
    console.log(pessoas.some(pessoa => pessoa.genero == "F" && pessoa.salario >= 5000));

    // media do salario dos homens e das mulheres 
    console.log(pessoas.reduce((soma, pessoa) => {soma + pessoa.salario }, 0)/pessoas.length);
});