import  Sequelize, { ConnectionAcquireTimeoutError }  from "sequelize";

const Usuarios_Unidades = Connection.define("usuarios_unidades", {
    funcao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Nivel_Acesso:{
        type: Sequelize.STRING,
        allowNull: false,

    },
})