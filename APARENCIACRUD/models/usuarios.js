import  Sequelize, { ConnectionAcquireTimeoutError }  from "sequelize";

const Usuarios = Connection.define("usuarios", {
    Nome_Usuario: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Idade_Usuario:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Data_Nascimento_Usuario: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    Perfil_Acesso: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Ativacao_Usuarios: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }
    
})