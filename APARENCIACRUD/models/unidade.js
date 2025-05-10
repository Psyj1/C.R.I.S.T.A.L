import  Sequelize, { ConnectionAcquireTimeoutError }  from "sequelize";

const Unidades = Connection.define("unidades", {
    Nome_unidade:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    Rua:{
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
    Cidade:{
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
    Area_Atuacao:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    Atividade_Unidade:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})