window.addEventListener("DOMContentLoaded", function() {
let vetIdades1 = [10, 11, 25, 80, 56, 46, 43, 56, 33, 44];
let vetIdades2 = [11, 23, 23, 11, 7, 12];

const mediaIdades = vet => {
    let sum = 0;
    for(let i in vet)
        sum += vet[i];
    
    return sum/vet.length;
}

const buscarMaior = vet => {
    let maior = vet[0];
    for(let i in vet)
        if (vet[i] > maior) maior = vet[i];
    return maior;
    
}

console.log(`maior: ${buscarMaior(vetIdades1)}`);
console.log(buscarMaior(vetIdades2));

console.log(mediaIdades(vetIdades1));
console.log(mediaIdades(vetIdades2));
})