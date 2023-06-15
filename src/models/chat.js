import { DataTypes } from "sequelize";

// Importar o conector do banco
import sequelize from "../db/conn.js";

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

export default Clientes;
