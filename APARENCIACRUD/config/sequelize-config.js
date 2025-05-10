import  Sequelize  from "sequelize";

const connection = new Sequelize({
    dialect: 'mysql',
    host: 'root',
    username: 'root',
    password: '',
    database: 'cristalbd',
    timezone: "-03:00"
})
export default connection;