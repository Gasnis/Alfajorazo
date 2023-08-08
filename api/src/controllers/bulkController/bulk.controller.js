const { Product, Pedido } = require("../../db")

const products  =[
    {
        name: "REY DE NUEZ",
        description: "Este alfajor  está formado por dos tapas de chocolate y trocitos de nuez, con un super relleno de dulce de leche artesanal.",
        image: "https://hispanaglobal.com/wp-content/uploads/2022/03/Dulce-De-Leche-cookies-9-scaled.jpg",
        price: 400.00,

    },

    {
        name: "REY DE NUEZ XL",
        description: "Este alfajor  está formado por dos tapas de chocolate y trocitos de nuez, con un super relleno de dulce de leche artesanal.",
        image: "https://hispanaglobal.com/wp-content/uploads/2022/03/Dulce-De-Leche-cookies-9-scaled.jpg",
        price: 600.00,

    },
    {
        name: "MARPLATENSE",
        description: "Este alfajor está formado por dos tapas una masa blanda con cacao amargo, relleno de dulce de leche artesanal, bañado en cobertura de chocolate semiamargo.",
        image: "https://hispanaglobal.com/wp-content/uploads/2022/03/Dulce-De-Leche-cookies-9-scaled.jpg",
        price: 400.00,
    },
    {
        name: "MANÍ",
        description: "Este alfajor está formado por dos tapas de masa blanda con cacao amargo y trocitos de maní tostado sin sal. Hay dos opciones de relleno: con pasta de maní o dulce de leche.",
        image: "https://hispanaglobal.com/wp-content/uploads/2022/03/Dulce-De-Leche-cookies-9-scaled.jpg",
        price: 400.00,
    },
    {
        name: "MANÍ CON CASIBAÑO DE CHOCO",
        description: "Este alfajor está formado por dos tapas de masa blanda con cacao amargo y trocitos de maní tostado sin sal. Tiene un super relleno de dulce de leche y una decoración con un baño de chocolate (puede ser blanco o semiamargo) a la mitad del alfajor. ",
        image: "https://hispanaglobal.com/wp-content/uploads/2022/03/Dulce-De-Leche-cookies-9-scaled.jpg",
        price: 400.00,
    },
    {
        name: "MANÍ CON BAÑO DE CHOCOLATE",
        description: "Este alfajor está formado por dos tapas de masa blanda con cacao amargo y trocitos de maní tostado sin sal. Hay dos opciones de relleno: con pasta de maní o dulce de leche. El alfajor tiene baño de chocolate semiamargo o chocolate blanco, con una decoración final de maní picado en el centro del alfajor.",
        image: "https://hispanaglobal.com/wp-content/uploads/2022/03/Dulce-De-Leche-cookies-9-scaled.jpg",
        price: 400.00,
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