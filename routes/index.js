// seregistran todas las url 
import express from 'express';
import {
    paginainicio,
    paginanosotros,
    paginaviajes,
    paginatestimoniales,
    paginadetalleviaje 
}from '../controllers/paginacontrol.js';

import {guardartestimonial} from    '../controllers/testimonialcontro.js'


const router = express.Router();

//.send - muestra texto 
//.json - { tarea:"safd"} muestra json 
//render - imprime una vista

router.get('/',paginainicio );

router.get('/nosotros',paginanosotros);

router.get('/viajes',paginaviajes);
router.get('/viajes/:viaje',paginadetalleviaje);//se crea el comodin 

router.get('/testimoniales',paginatestimoniales);
router.post('/testimoniales',guardartestimonial);
export default router;
