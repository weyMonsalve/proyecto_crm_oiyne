//Importaciones

const express = require('express');
const cors = require('cors');
require('dotenv').config();  //carga variables de entorno desde .env

//Rutas
const usuarioRoutes = require('./routes/usuarioRoutes')
const loginRoutes = require('./routes/loginRoutes')
const clienteRoutes = require('./routes/clienteRoutes');
const productosRoutes = require('./routes/productosRoutes');

//Configuracion inicial
const app = express();




// middlewares
app.use(cors());  //Habilita cors para permitir conexion entre servidores
app.use(express.json());  //Permite recibir datos en formato JSON



//Ruta base
app.get('/', (req, res) => {
    res.send('¡Servidor CRM IOYNE funcionando!')
});


//Uso de rutas
app.use('/api/usuarios', usuarioRoutes);  // Ruta para usuarios
app.use('/api/login', loginRoutes);   //Ruta para login
app.use('/api/clientes', clienteRoutes);   //Ruta para clientes
app.use('/api/productos', productosRoutes);   //Ruta para productos

//Servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
   console.log(` Servidor corrirndo en  http://localhost:${PORT}` );
})
