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
  tipo: {
    type: DataTypes.STRING,
  },
  protocolo:{
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
  },
  data: {
    type: DataTypes.STRING,
  },
  horário: {
    type: DataTypes.STRING,
  },
  disparo: {
    type: DataTypes.STRING,
  },
});

module.exports = Clientes;
