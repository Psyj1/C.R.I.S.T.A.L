import Sequelize  from "sequelize";
import connection from "../config/sequelize-config.js";

const Unidades = connection.define("unidades", {

  ID_Unidade: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome_unidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Rua: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Bairro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Estado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CNPJ_Unidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Area_Atuacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Ativacao_Unidade: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  }, {
  timestamps: false,
  freezeTableName: true
});

Unidades.sync({foece: false})
export default Unidades;