import Sequelize  from "sequelize";
import connection from "../config/sequelize-config.js";

// Criando o Model (tabela no banco)
const Cliente = connection.define('clientes', {
    // Colunas da tabela
    nome: {
        // Tipo do dado
        type: Sequelize.STRING,

        // Permite vazio?
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        // Tipo do dado
        type: Sequelize.STRING,

        // Permite vazio?
        allowNull: false,
    }
});
//Criando a tabela somente se ainda não existir
Cliente.sync({force: false})

export default Cliente;