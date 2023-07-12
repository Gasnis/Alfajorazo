const { Product } = require("../../db");

const postUserData = async (userData) => {
  let { id, name, description, image, price } = userData;
  if (!image) {
    image =
      "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png";
  }
  if (id && name && description && image && price) {
    const searchUser = await Product.findOne({
      where: { id: id },
    });
    if (!searchUser) {
      const user = await Product.create({
        id,
        name,
        description,
        image,
        price,
      });
      return user;
    } else {
      throw new Error(`The user ${id} was already create`);
    }
  } else {
    throw new Error("Missing data");
  }
};

const getAllUsers = async (name) => {
  let todos = await Product.findAll();
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

const getUserDetail = async (id) => {
  if (id) {
    const userDetail = await Product.findOne({
      where: { id: id }
    });
    if (!userDetail) {
      throw new Error("you can't access the detail of an nonexistent user");
    }
    return userDetail;
  }
};

const deleteUser = async (id) => {
  const user = await Product.findByPk(id);
  user.destroy();
};

const updateUser = async (newUserData) => {
  const { id, name, description, image, price } = newUserData;

  if (name && image && description && price && id) {
    let user = await Product.findByPk(id);
    if (user.id === id) {
      await user.update({
        id,
        name,
        description,
        image,
        price,
      });
      const userUpdated = await Product.findOne({
        where: { id: id }
      });
      return userUpdated;
    } else {
      throw new Error("You must write your own email");
    }
  } else {
    throw new Error("Not all parameters arrived successfully");
  }
};

module.exports = {
  postUserData,
  getUserDetail,
  getAllUsers,
  deleteUser,
  updateUser,
};
