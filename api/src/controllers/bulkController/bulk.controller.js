const { Product } = require("../../db")


const products  =[
    {
        name: "Cordobes",
        description: "El mejor alfajor",
        image: "images/cordobes.png",
        price: 200.00,
        
    }

]


const bulkCreate = async () => {
    products.forEach(e=>{
        Product.create(e)
    })
    return "se creo"
}

module.exports = bulkCreate;