const Sequelize = require("sequelize");
const ProyectoDoctorado = (sequelize) => {
  sequelize.define("ProyectoDoctorado", {
    idproyectodoctorado: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    areas: Sequelize.STRING(45),
    duracion: Sequelize.INTEGER,
    tema: Sequelize.STRING(45),
    descripcion: Sequelize.STRING(100),
    investigador: Sequelize.INTEGER,
  });
};

module.exports = ProyectoDoctorado;
