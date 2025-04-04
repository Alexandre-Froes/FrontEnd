window.addEventListener("DOMContentLoaded", () => {
    const idades = [25,30,25,68,35,27,80,32,29,94,31,56,33,23,38,34,41,28,30,35];

    // a) A soma das idades
    console.log("Total das idades: " + 
        idades.reduce((somaTotal, idade) => {
            somaTotal += idade; 
            return somaTotal;
        }, 0));

    // b) A média aritmética simples das idades
    console.log("Média das idades: " +
        idades.reduce((somaTotal, idade) => {
            somaTotal += idade; 
            return somaTotal / idades.length;
        }, 0).toFixed(4));

    // c) A maior idade
    console.log("Maior idade: " +
    idades.reduce((maior, idade) => {
        if(idade > maior)
            maior = idade
            return maior;
    }, 0));

    // d) As idades ímpares
    console.log("Todas as idades impares: " +
        idades.filter(idade => idade % 2 != 0)
        .map(idade => idade));

    // e) Verificar se todos são maiores de idade (idade >= 18); Retorno: true ou false
    console.log("Todas as idades são maior de idade? " +
        idades.every(idade => idade >= 18)
    )
    
    // f) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
    let idadePedida = prompt("Digite um numero: ");
    console.log("Todas as idades são maiores que " + idadePedida + "? " +
        idades.every(idade => idade >= idadePedida)
    )

    // g) Exibir todas as idades maiores ou iguais a determinada idade
    console.log("Todas as idades maiores ou igual a " + idadePedida + ": " +
        idades.filter(idade => idade >= idadePedida)
        .map(idade => idade));

    // h) A média das idades das idades com idades maiores ou iguais a determinada idade
    const idadesPedidas = idades.filter(idade => idade >= idadePedida);
    console.log("Média aritmética de todas as idades que tem idade maior que " + idadePedida + ": " + idadesPedidas.reduce((somaTotal, idade) => {
        somaTotal += idade; 
        return somaTotal / idades.length;
    }, 0).toFixed(4))
})