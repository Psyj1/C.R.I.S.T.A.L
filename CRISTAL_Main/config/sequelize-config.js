//import o sequelize

import Sequelize from "sequelize";

// criando os dados de conexao com o banco de dados
const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "cristalbd",
  timezone: "-03:00",
});

export default connection;
