const { obtenerUsuarios, crearUsuario } = require('../models/usuarioModel');

//Obtener todos los usuarios
const listarUsuarios = async(req, res) => {
    try {
        const usuarios = await obtenerUsuarios();
        res.json(usuarios);
    } catch (error) {
        console.error('Error al obtener usuarios:', error.message, error.stack);
        res.status(500).json({ message: 'Error del servidor'});
    }
};

//Crear un nuevo usuario
const registrarUsuario = async(req, res) => {
    try {
        const { nombre, email, contraseña } =req.body;

        //validacion basica
        if (!nombre || !email || !contraseña) {
            return res.status(400).json({message: 'Faltan datos obligatorios'});
        }

        const nuevoUsuario =await crearUsuario({ nombre, email, contraseña });
        res.status(201).json(nuevoUsuario)
    } catch (error) {
        console.error('Error al crear usuario:', error.message, error.stack);
        res.status(500).json({message: 'Error al crear el usuario'});
    }
};

module.exports = {
    listarUsuarios,
    registrarUsuario
}