window.addEventListener("DOMContentLoaded", () => {
    let vet1 = [10, 20, 30];
    let vet2 = [40, 50, 60];

    let vet3 = [...vet1, ...vet2];

    console.log(Math.max(...vet3));

    const pessoa1 = {
        nome: "Xande",
        idade: 19
    }

    const pessoa2 = {...pessoa1}

    const pessoa3 = {...pessoa1, sexo: "M"}

    const pessoa4 = {...pessoa1, idade: 20};

    console.log(pessoa1);
    console.log(pessoa2);
    console.log(pessoa3);
    console.log(pessoa4);
});