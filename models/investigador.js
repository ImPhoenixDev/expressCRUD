const Sequelize = require("sequelize");
const Investigador = (sequelize) => {
  sequelize.define("Investigador", {
    idinvestigador: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    departamento: Sequelize.STRING(45),
    nombre: Sequelize.STRING(45),
    universidad: Sequelize.INTEGER,
  });
};

module.exports = Investigador;
