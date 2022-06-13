console.log("var let const");
const x = 10;
console.log("valor da const x antes do if " + x);

if (x > 0) {
    console.log("entrou no IF")
    var a = 100;
    let b = 200;
    const c = 300;

    console.log("imprimindo dentro do IF var " + a); //exibe dentro do escopo
    console.log("imprimindo dentro do IF let " + b); //exibe dentro do escopo
    console.log("imprimindo dentro do IF const " + c); //exibe dentro do escopo

    const x = 3.1415962;
    console.log("o valor da const x dentro do if " + x);
    console.log("saiu do IF")
}
console.log("valor da const x depois do if " + x);
console.log("imprimindo fora do IF var " + a); //exibe fora do escopo
/*
console.log("imprimindo fora do IF let " + b); //erro
console.log("imprimindo fora do IF const " + c); //erro
*/

console.log("imprimindo o for")
for (let i = 1; i <= 10; i++) {
    console.log("o valor agora " + i);
}