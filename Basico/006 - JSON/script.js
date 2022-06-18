console.log("JSON");
console.log("");

const produto = {
    nome: "Computador",
    preco: 9500.00
}
console.log(`Nome do produto:  ${produto.nome}`);
console.log(`valor do produto:  ${produto.preco}`);
console.log(`objeto produto ${produto}`);
console.log("");

//padrão de trafego requisicoes
const obj1 = {
    "name": "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}

//declaracao mista
const obj2 = {
    name: "Computador",
    price: 50.9,
    "due-date": "2025-04-15" //se o nome do atributo tiver caractere especial obrigatorio uso de aspas
}

//ambas podem ser acessadas pelo javascript
console.log(`declaracao do objeto no padrao de requisicao: ${obj1.name}`);
console.log(`declaracao do objeto no tipo misto: ${obj2.name}`);
console.log("");

const obj3 = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.id);
console.log(obj3.client);
console.log(obj3.client.name);

console.log("");
console.log("Parse / Stringfy");
const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;

const obj = JSON.parse(txt);

console.log(txt.nome);

console.log(obj.nome);

const text = JSON.stringify(obj);

console.log(text);
console.log(obj);