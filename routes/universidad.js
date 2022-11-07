const express = require("express");
const router = express.Router();
const universidadController = require("../controllers/universidad");
//Create,Read,Update,Delete  (CRUD)  Altas Bajas Cambios Consultas
//Servicio para mostrar el formulario
router.get("/altaUniversidad", universidadController.getAltaUniversidad);
//Servicio para procesar los datos del formulario
router.post("/altaUniversidad", universidadController.postAltaUniversidad);
//Servicio para consultar todos los datos
router.get("/consultaUniversidades", universidadController.getUniversidades);
//Servicio para eliminar un registro por id
router.post("/bajaUniversidad", universidadController.postEliminarUniversidad);
//Servicio para actualizar las consola
router.post(
  "/actualizarUniversidad",
  universidadController.postActualizarUniversidad
);

// Eliminar investigador
// router.post("/storeInvestigadores", storeInvestigadores);

// router.post("/storeInvestigador", universidadController.storeInvestigador);
//
// /**
//  * Retorna la vista para editar un Investigador.
//  * @returns {Promise<*>}
//  */
// router.post("/editInvestigador", universidadController.editInvestigador);
//
// /**
//  * Actualizar un Investigador desde el formulario de editar.
//  * @returns {Promise<*>}
//  */
// router.post("/updateInvestigador", universidadController.updateInvestigador);

module.exports = router;
