const {Router} = require("express")
const {getAllPedidos, postPedido} = require("../../controllers/pedidoControllers/pedido.controller")


const router = Router()

router.get("/", async (req,res) => {
    try {
      const { name } = req.query;
      if (name) {
        const clientName = await getAllPedidos(name);
        res.status(200).json(clientName);
      }else{
        res.status(200).json(await getAllPedidos());
      }
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

router.post("/", async(req, res)=>{
try {
    const userData = req.body;
    const userDataCreated = await postPedido(userData)
    res.status(200).json(userDataCreated)
} catch (error) {
    res.status(400).send(error.message)
}
})

module.exports = router;