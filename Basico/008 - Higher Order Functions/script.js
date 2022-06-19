console.log("Funções de alta ordem");
console.log("");
const list1 = [1, 2, 3, 4];
const list2 = [];
const nomes = ['MARIA', 'JOAO', 'ANABELA'];

const dobro = (num) => num * 2;
const triplo = (num) => num * 3;

const m1 = list1.map(dobro);
const m2 = list1.map(triplo);
const m3 = list1.map(x => x * 2);
console.log("funções em MAP")

console.log(`dobro de um array ${m1}`);
console.log(`triplo de um array ${m2}`);
console.log(`chamada em lambda ${m3}`);
console.log("");

console.log("Filter");

//predicado
const par = (num) => num % 2 === 0;

const f1 = list1.filter(par);
const f2 = list1.filter(num => num % 2 === 0);
const f3 = list1.filter(num => num > 2);


console.log(`numeros pares filtrados do array: ${f1}`);
console.log(`numeros pares filtrados do array: ${f2}`);
console.log(`numeros maiores do que 2 filtrados do array: ${f3}`);
console.log("");
console.log("Reduce");

const soma = (num1, num2) => num1 + num2;
const r1 = list1.reduce(soma, 0)
const r2 = list2.reduce(soma, 0)
console.log(`soma dos itens do array: ${r1}`);
console.log(`soma dos itens do array vazio: ${r2}`);
const produto = (x, y) => x * y;
const r3 = list1.reduce(produto, 1);
const r4 = list2.reduce(produto, 1);
console.log(`produto dos itens do array: ${r3}`);
console.log(`produto dos itens do array vazio: ${r4}`);
console.log("");

console.log("Sort");
const s1 = nomes.sort();
console.log(`ordena lista: ${s1}`);

const comparaPorTamanho = (a1, a2) => a1.length - a2.length;
const s2 = nomes.sort(comparaPorTamanho)
console.log(`ordena lista por tamanho: ${s2}`);
console.log(`ordena lista por tamanho lambda: ${nomes.sort((x, y) => x.length - y.length)}`);

