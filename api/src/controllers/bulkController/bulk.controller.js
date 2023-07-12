const { Product, Pedido } = require("../../db")
const  reydenuez = ("./images/reydenuez.jpg")


const products  =[
    {
        name: "REY DE NUEZ",
        description: "Con nuez",
        image: reydenuez,
        price: 400.00,

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