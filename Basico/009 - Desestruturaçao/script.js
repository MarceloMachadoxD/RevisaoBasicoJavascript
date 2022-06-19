console.log("Desestruturação");
console.log("");

const obj = {
    id: 53,
    date: "2022-06-19",
    items: [
        {
            description: "Celular",
            price: 1900.00,
            quantity: 1
        }, {
            description: "Mouse",
            price: 100.00,
            quantity: 3
        },
    ],
    client: {
        name: "Vadder",
        email: "darth@imperial.gl",
        active: true
    }
};

const {id, client, items} = obj;
console.log(id);
console.log(client);

const subTotal = (item) => item.price * item.quantity;
const subTotal2 = ({price, quantity}) => price * quantity;

console.log(`Total do item: ${obj.items[1].description} = ${subTotal(obj.items[1])}`)
console.log(`Total do item: ${items[0].description} = ${subTotal2(items[0])}`)

const total = ({items}) => {
    let soma = 0;
    for (let i = 0; i < items.length; i++) {
       soma += subTotal2(items[i])
    }
    return soma;
}
console.log(`O total da venda para o cliente ${client.name} é de R$ ${total(obj)}`)

const [item1, item2] = obj.items;

console.log(item1);
console.log(item2);