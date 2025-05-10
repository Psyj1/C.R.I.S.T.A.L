import  Sequelize, { ConnectionAcquireTimeoutError }  from "sequelize";

const Emails_Usuarios = Connection.define("emails_usuarios", {
    Email_Usuario: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
})