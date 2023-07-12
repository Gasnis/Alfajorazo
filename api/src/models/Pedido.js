const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pedido', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    clientName: {
        type: DataTypes.STRING, 
    },
    products: {
        type: DataTypes.JSONB, 
        defaultValue: {}

    },
    totalPrice:{
        type: DataTypes.FLOAT,
        
    },
    date:{
        type: DataTypes.DATE,
        defaultValue: new Date()

    },

  },{
    timestamps: false,
  });

};