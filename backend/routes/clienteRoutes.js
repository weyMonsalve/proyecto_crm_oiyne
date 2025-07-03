const express = require('express');
const router = express.Router();
const {
    crearCliente,
    obtenerClientes,
    actualizarCliente
} = require('../controllers/clienteController');



// POST - crear cliente
router.post('/', crearCliente);

//GET -obtener todos los clientes
router.get('/', obtenerClientes);

//PUT -actualizar cliente pot ID
router.put('/:id', actualizarCliente);

module.exports = router;