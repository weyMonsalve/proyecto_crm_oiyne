const express = require('express');
const router = express.Router();
const { listarUsuarios, registrarUsuario } = require('../controllers/usuarioController');

//Ruta para obtener los usuarios
router.get('/', listarUsuarios);

//Ruta para registrar usuarios
router.post('/', registrarUsuario);

module.exports = router;    