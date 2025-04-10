window.addEventListener("DOMContentLoaded", () => {

    const maior = (a, b) => (a > b) ? a : b;
    maior(120, 130);

    const vet = [25, 3, 10, 15, 16, 22, 10, 4, 3];
    const ref = 20;

    vet.forEach((num, index) => {
        if (num >= ref) console.log(`[${index}] = ${num}`);
    });

    console.log(vet.map(num => num * 2));

    console.log(vet.filter(num => num >= 15));

    console.log(vet.every(num => num > 0));

    console.log(vet.some(num => num >= 100));

    console.log(vet.reduce((total, num) => total + num, 0)/vet.length);
});