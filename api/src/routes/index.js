const { Router } = require("express");
const productRouter = require("./productRoute/product.route");
const pedidoRouter = require("./pedidoRoute/pedido.route");
const bulkRouter = require("./bulkRoute/bulk.route");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/product", productRouter); // llega la promesa y va a bucar la rura de la variable userRouter
router.use("/pedido", pedidoRouter)
router.use("/bulk", bulkRouter);


module.exports = router;
