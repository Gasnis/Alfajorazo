const { Router } = require("express");
const productRouter = require("./productRoutes/product.route");
const bulkRouter = require("./bulkRoute/bulk.route");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/product", productRouter); // llega la promesa y va a bucar la rura de la variable userRouter
router.use("/bulk", bulkRouter);


module.exports = router;
