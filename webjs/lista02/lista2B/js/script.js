window.addEventListener("DOMContentLoaded", () => {
    const pessoas = [
        { nomeCompleto: "Ana", idade: 18, sexo: "F", salario: 1000},
        { nomeCompleto: "João", idade: 20, sexo: "M", salario: 3000},
        { nomeCompleto: "César", idade: 33, sexo: "M", salario: 1900},
        { nomeCompleto: "Maria", idade: 12, sexo: "F", salario: 7000},
        { nomeCompleto: "Zé", idade: 17, sexo: "M", salario: 2400}
    ];


    console.log("1. Exibir o nome e a idade de todas as pessoas maiores de idade")
    let pessoasMaioresIdade = pessoas.filter(pessoa => pessoa.idade >= 18);
    pessoasMaioresIdade.forEach(pessoa => console.log(`${pessoa.nomeCompleto} ${pessoa.idade}`));


    console.log("2. Exibir os nomes de todas as pessoas do sexo masculino");
    console.log(pessoas.filter(pessoa => pessoa.sexo == 'M').map(pessoa => pessoa.nomeCompleto))

    console.log("3. Exibir os dados da pessoa com o maior salario")
    let maiorSalario = pessoas.reduce((maior, pessoa) => {
        if(pessoa.salario > maior) 
            maior = pessoa.salario
        return maior
    }, 0);
    console.log(maiorSalario);

    console.log("4. Há alguma mulher que ganha acima de 5000,00?")
    console.log(pessoas.some(pessoa => (pessoa.sexo == 'F' && pessoa.salario > 5000)))

    console.log("5. Media dos salarios de homens e mulheres:")
    console.log("Homens: ")
    let vetMasculino = pessoas.filter(pessoa => pessoa.sexo == 'M')
    console.log(vetMasculino.reduce((total, pessoa) => {
            return total + pessoa.salario / vetMasculino.length
    }, 0).toFixed(2));

    console.log("Mulheres: ")
    let vetFeminino = pessoas.filter(pessoa => pessoa.sexo == 'F')
    console.log(vetMasculino.reduce((total, pessoa) => {
            return total + pessoa.salario / vetFeminino.length
    }, 0).toFixed(2));
})