const { Pedido } = require("../../db");

const getAllPedidos = async (name) => {
  let todos = await Pedido.findAll();
  if (name) {
    const byName = todos.filter((local) =>
      local.name.toLowerCase().includes(name.toLowerCase())
    );
    if (byName.length) {
      return byName;
    } else {
      throw new Error(`${name} not found :/`);
    }
  }
  return todos;
};

const postPedido = async (userData) => {
  let { id, clientName, products, date, totalPrice } = userData;
  if ((id, clientName, products, date, totalPrice)) {
    const searchUser = await Pedido.findOne({
      where: { id: id },
    });
    if (!searchUser) {
      const user = await Pedido.create({
        id,
        clientName,
        products,
        date,
        totalPrice,
      });
      return user;
    } else {
      throw new Error(`The user ${id} was already create`);
    }
  } else {
    throw new Error("Missing data");
  }
};

module.exports = {
  getAllPedidos,
  postPedido,
};
