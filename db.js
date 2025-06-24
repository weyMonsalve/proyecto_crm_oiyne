//Importamos la clase pool desde pg
const { pool } = require('pg');

//Cargamos las variables de entorno desde el archivo .env
require('dotenv').config();

//Creamos una nueva conexion a la base de datos usando los datos de .env
const pool = new pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

//Exportamos el pool para poder usarlo en otros archivos
module.exports = pool;