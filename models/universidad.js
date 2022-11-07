const Sequelize = require("sequelize");
const Universidad = (sequelize) => {
  sequelize.define("Universidad", {
    iduniversidad: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombreUniversidad: Sequelize.STRING,
    paisUniversidad: Sequelize.STRING,
    descripcionUniversidad: Sequelize.STRING,
  });
};

module.exports = Universidad;
