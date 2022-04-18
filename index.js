// const express = require("express");
import express from 'express';
import router from './routes/index.js';
//conexion ala base de datos 
import db from './config/db.js';

import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});


const app = express();


//conectar ala base de datos
db.authenticate()
    .then( () => console.log('base de datos conectada'))
    .catch( error => console.log(error));
//

//definir puerto 
//se usa en  servidor local  
// const port = process.env.PORT || 4000;

//habilitamos pug
app.set('view engine','pug');


//obtener año actual se crea variable y se pasa alas vistass
app.use((req,res,next)=>{
    const year = new Date();
    res.locals.actalyear = year.getFullYear();//se obtiene un año actual
    res.locals.nombresitio = "BHLS Agencia de Viajes"

    next();
});

//agregar body parse para leer los datos del formulario
app.use(express.urlencoded({extended:true}));


//definir la carpeta publica 
app.use(express.static('public'));

//agregar router
app.use('/',router);


//se usa en  servidor local  
//arranca el servidor
// app.listen(port,()=>{
//     console.log(`el servidor esta funcionando en el puerto ${port}`)
// })
// app.listen(300)


//puertos hijos para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port,host, ()=>{
    console.log("El servidor esta funcionando");
})