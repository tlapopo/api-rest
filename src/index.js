const express = require('express');
const app = express();


//configuracion del servidor
app.set('port', process.env.PORT || 3000);


//middlewares funciones que se ejecutan antes de que se procese algo. 
app.use(express.json());


//rutas
app.use(require('./routes/employes'));


//inicializacion del servidor
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
})