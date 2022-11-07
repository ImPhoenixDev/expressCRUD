const path = require("path");
const ProyectoDoctorado = require("../utils/database").models.ProyectoDoctorado;

/**
 * Retorna los proyectos.
 */
exports.getProyectoDoctorado = (__req, res) => {
  ProyectoDoctorado.findAll()
    .then((investigadores) => {
      console.log("ProyectoDoctorado", investigadores);
      res.send(investigadores);
    })
    .catch((e) => {
      console.log(e);
      res.send({ Error: e });
    });
};

/**
 * Retorna la vista para crear investigadores.
 */
exports.createProyectoDoctorado = (__req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "views", "createInvestigadores.html")
  );
};

/**
 * Guarda un ProyectoDoctorado en la base de datos.
 */
exports.storeProyectoDoctorado = (req, res) => {
  console.log(req.body);
  ProyectoDoctorado.create(req.body)
    .then((__res) => {
      res.send("Registro exitoso");
    })
    .catch((error) => {
      res.send({ error: error });
    });
};

/**
 * Actualiza los datos de un investigador.
 */
exports.updateProyectoDoctorado = async (req, res) => {
  const investigadorAActualizar = await ProyectoDoctorado.findOne({
    where: {
      idinvestigador: req.body.idinvestigador,
    },
  });

  if (investigadorAActualizar) {
    ProyectoDoctorado.update(req.body, {
      where: {
        idinvestigador: req.body.idinvestigador,
      },
    })
      .then(() => {
        console.log("ProyectoDoctorado actualizado");
        res.send("ProyectoDoctorado actualizado");
      })
      .catch((e) => {
        console.log(e);
        res.send({ Error: e });
      });
  } else {
    res.send({ Error: "No existe el investigador" });
  }
};

/**
 * Eliminar investigador.
 */
exports.deleteProyectoDoctorado = (req, res) => {
  ProyectoDoctorado.destroy({
    where: {
      idinvestigador: req.body.id,
    },
  })
    .then(() => {
      res.send("ProyectoDoctorado eliminado");
    })
    .catch((e) => {
      console.log(e);
      res.send({ Error: e });
    });
};
