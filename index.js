//Importaciones

const express = require('express');
const cors = require('cors');
require('dotenv').config();  //carga variables de entorno desde .env


const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('¡Servidor CRM IOYNE funcionando!')
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
   console.log(` Servidor corrirndo en  http://localhost:${PORT}` );
})
