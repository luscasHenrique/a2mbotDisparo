const { DataTypes } = require("sequelize");

// Importar o conector do banco
const sequelize = require ("../db/conn.js");

const Clientes = sequelize.define("clientes", {
  nome: {
    type: DataTypes.STRING,
  },
  telefone: {
    type: DataTypes.STRING,
  },
  assunto: {
    type: DataTypes.STRING,
  },
  atendido:{
    type: DataTypes.INTEGER,
  },
});

module.exports = Clientes;
