import  Sequelize, { ConnectionAcquireTimeoutError }  from "sequelize";

const Telefones_Usuarios = Connection.define("telefones_usuarios", {
    Telefone_usuarios: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
})