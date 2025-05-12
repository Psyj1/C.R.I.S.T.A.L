import Sequelize from 'sequelize';
import connection from '../config/sequelize-config.js';

const Telefones_Usuarios = connection.define('Telefones_Usuarios', {
  ID_Telefone_Usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ID_Usuario: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Telefone_Usuario: {
    type: Sequelize.STRING(30),
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
});

export default Telefones_Usuarios;

