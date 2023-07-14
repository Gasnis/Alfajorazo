const { Product, Pedido } = require("../../db")
const  reydenuez = URL("./images/reydenuez.jpg")


const products  =[
    {
        name: "REY DE NUEZ",
        description: "Este alfajor  está formado por dos tapas de chocolate y trocitos de nuez, con un super relleno de dulce de leche artesanal.",
        image: reydenuez,
        price: 400.00,

    },

    {
        name: "REY DE NUEZ XL",
        description: "Este alfajor  está formado por dos tapas de chocolate y trocitos de nuez, con un super relleno de dulce de leche artesanal.",
        image: reydenuez,
        price: 600.00,

    },
    {
        name: "REY DE NUEZ XL",
        description: "Con nuez",
        image: reydenuez,
        price: 600.00,
    }

]

const pedidos = [
    {
        clientName: "Gaston",
        products: { cordobeses: 2 },
        totalPrice: 400.00,
        date: new Date(),
    }
]


const bulkCreate = async () => {
    products.forEach(e=>{
        Product.create(e)
    })
    pedidos.forEach(e=>{
        Pedido.create(e)
    });
    return "se creo"
}

module.exports = bulkCreate;