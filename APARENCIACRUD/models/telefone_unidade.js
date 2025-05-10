import  Sequelize, { ConnectionAcquireTimeoutError }  from "sequelize";

const Telefones_Unidade = Connection.define("telefones_unidade", {
    Telefone_Unidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
})