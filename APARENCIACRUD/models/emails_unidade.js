import Sequelize, { ConnectionAcquireTimeoutError } from "sequelize";

const Emails_Unidade = Connection.define("emails_unidade", {
  Email_Unidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
