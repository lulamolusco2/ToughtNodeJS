const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conenctamos ao banco");
} catch (err) {
  console.log(`Não foi possivel conectar: ${err}`);
}
module.exports = sequelize;
