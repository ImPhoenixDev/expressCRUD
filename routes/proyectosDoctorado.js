const express = require("express");
const router = express.Router();
const {
  getProyectosDoctorado,
  createProyectosDoctorado,
  storeProyectosDoctorado,
  updateProyectosDoctorado,
  deleteProyectosDoctorado,
} = require("../controllers/proyectosDoctorado");

// Vista crear proyecto doctorado
router.get("/createProyectosDoctorado", createProyectosDoctorado);

// Consultar proyecto doctorado
router.get("/proyecto doctorado", getProyectosDoctorado);

// Guardar proyecto doctorado
router.post("/storeProyectosDoctorado", storeProyectosDoctorado);

// Actualizar proyecto doctorado
router.post("/updateProyectosDoctorado", updateProyectosDoctorado);

// Actualizar proyecto doctorado
router.post("/deleteProyectosDoctorado", deleteProyectosDoctorado);

module.exports = router;
