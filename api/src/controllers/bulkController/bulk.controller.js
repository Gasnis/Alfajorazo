const { Product } = require("../../db")


const products  =[

]


const bulkCreate = async () => {
    products.forEach(e=>{
        Product.create(e)
    })
    return "se creo"
}

module.exports = bulkCreate;