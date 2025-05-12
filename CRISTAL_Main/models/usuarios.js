// models/usuarios.js
import Sequelize from 'sequelize';
import connection from '../config/sequelize-config.js';
import Telefones_Usuarios from './TelefonesUsuarios.js';
import Emails_Usuarios from './EmailsUsuarios.js';

const Usuarios = connection.define('Usuarios', {
  ID_Usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Nome_Usuario: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  Idade_Usuario: {
    type: Sequelize.INTEGER,
  },
  Data_Nascimento_Usuario: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  Perfil_Acesso: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  Senha_Usuario: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  Ativacao_Usuario: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true 
  }
}, {
  timestamps: false,
  freezeTableName: true
});

Usuarios.hasMany(Telefones_Usuarios, { foreignKey: 'ID_Usuario' });
Usuarios.hasMany(Emails_Usuarios, { foreignKey: 'ID_Usuario' });

export default Usuarios;

