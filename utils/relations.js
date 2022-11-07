function applyRelations(sequelize) {
  console.log(sequelize.models);

  const { Universidad, Investigador, ProyectoDoctorado } =
    sequelize.models;

  Universidad.hasMany(Investigador, {
    foreignKey: "universidad",
    sourceKey: "iduniversidad",
  });

  Investigador.belongsTo(Universidad, {
    foreignKey: "universidad",
    targetKey: "iduniversidad",
  });


  Investigador.hasMany(ProyectoDoctorado, 
    { foreignKey: "investigador", sourceKey: "idinvestigador" }
 );

  ProyectoDoctorado.belongsTo(Investigador,
    { foreignKey: "investigador", targetKey: "idinvestigador" }
  );
}

module.exports = { applyRelations };
