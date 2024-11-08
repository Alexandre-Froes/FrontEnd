var num = parseInt(prompt("Digite um número: "));

document.write(`
<table>
    <tr>
        <th>Decimal</th>
        <th>Hexadecimal</th>
        <th>Binário</th>
    </tr>
    <tr>
`);
for(var i = 0; i <= num; i++) {
    hexString = i.toString(16).toUpperCase();
    binString = i.toString(2);
    
    document.write(`    <tr>`); 
    document.write(`        <td>${i}</td>`); 
    document.write(`        <td>${hexString}</td>`); 
    document.write(`        <td>${binString}</td>`);
    document.write(`    </tr>`);
} 
document.write(`
    </tr>
</table>
`);