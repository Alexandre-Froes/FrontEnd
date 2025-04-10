window.addEventListener("DOMContentLoaded", function() {
    let vet = [11, 22, 23, 12, 7, 12];

    // const imprimirVet = vet => {
    //     for(let i in vet)
    //         console.log(vet[i]);
    // }

    // imprimirVet(vet);

    // console.table(vet);

    const ehPar = x => ((x%2)==0) ? console.log("par") : console.log("impar");

    vet.forEach(ehPar);
})