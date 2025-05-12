import Sequelize from 'sequelize';
import connection from '../config/sequelize-config.js';

const Emails_Usuarios = connection.define('Emails_Usuarios', {
  ID_Email_Usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ID_Usuario: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Email_Usuario: {
    type: Sequelize.STRING(150),
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  timestamps: false,
  freezeTableName: true
});

export default Emails_Usuarios;
