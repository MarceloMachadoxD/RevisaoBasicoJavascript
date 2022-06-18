console.log("Functions e Arrow Functions");
console.log("");

//----retornando valores---
//cria função diretamente
function soma1(num1, num2) {
    return num1 + num2;
}

//atribui a função a uma constante
const soma2 = function (num1, num2) {
    return num1 + num2;
}

//arrow function
const soma3 = (num1, num2) => {
    return num1 + num2;
}

//arrow function inline
const soma4 = (num1, num2) => num1 + num2;

//funcao
const dobro1 = function (num) {
    return num * 2;
}

//arrow function
const dobro2 = (num) => num * 2;

//sem retorno void retorna undefined
function alerta1(valor) {
    alert(`você disse ${valor}?`);
}

const alerta2 = (valor) => alert(`você disse ${valor}?`);

// Variaveis definidas dentro da funcao pertencem somente ao escopo da funcao

function areaCirculo(raio) {
    var pi = 3.14;
    return pi * raio * raio;
}
//console.log(pi);

// Function hoisting: declaracoes de funcoes sao "movidas" para cima pelo motor do JavaScript

teste("chamada antes da funcao criada");
function teste(x) {

    console.log("TESTE " + x);
}

teste("chamada depois da funcao criada");

console.log("");
console.log("---funcao de alta ordem---");

console.log("chama uma funcao de triplo");
const triplo = (num) => num*3;
console.log(triplo(1));

console.log("chama funcao passando outra como argumento");
const dobraAntes = (f, num) => f(num*2);
console.log(dobraAntes(triplo, 1));
console.log(dobraAntes(dobro2, 1));
