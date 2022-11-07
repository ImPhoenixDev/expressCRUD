const path = require("path");
const Investigador = require("../utils/database").models.Investigador;
/**
 * Retorna los investigadores.
 * @returns {Promise<*>}
 */
exports.getInvestigadores = (__req, res) => {
  Investigador.findAll()
    .then((investigadores) => {
      console.log("Investigadores", investigadores);
      res.send(investigadores);
    })
    .catch((e) => {
      console.log(e);
      res.send({ Error: e });
    });
};

/**
 * Retorna la vista para crear investigadores.
 * @returns {Promise<*>}
 */
exports.createInvestigadores = (__req, res) => {
  //res.send('<h1>Formulario de consola</h1>')
  res.sendFile(
    path.join(__dirname, "..", "views", "createInvestigadores.html")
  );
};

/**
 * Guarda un Investigador creado desde el formulario.
 * @returns {Promise<*>}
 */
exports.storeInvestigadores = (req, res) => {
  console.log(req.body);
  Investigador.create(req.body)
    .then((__res) => {
      res.send("Registro exitoso");
    })
    .catch((error) => {
      res.send({ error: error });
    });
};

/**
 * Actualiza investigador.
 * @returns {Promise<*>}
 */
exports.updateInvestigadores = async (req, res) => {
  const investigadorAActualizar = await Investigador.findOne({
    where: {
      idinvestigador: req.body.idinvestigador,
    },
  });

  if (investigadorAActualizar) {
    Investigador.update(req.body, {
      where: {
        idinvestigador: req.body.idinvestigador,
      },
    })
      .then(() => {
        console.log("Investigador actualizado");
        res.send("Investigador actualizado");
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
 * @returns {Promise<*>}
 */
exports.deleteInvestigadores = (req, res) => {
  Investigador.destroy({
    where: {
      idinvestigador: req.body.id,
    },
  })
    .then(() => {
      res.send("Investigador eliminado");
    })
    .catch((e) => {
      console.log(e);
      res.send({ Error: e });
    });
};
