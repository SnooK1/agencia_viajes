import { Viaje } from "../Model/viajes.js";
import { Testimonial } from "../Model/testimoniales.js";

const paginainicio =async (req,res)=>{//req- lo que enviamos  : res-lo que expres nos responde
    // res.send('hola mundo');//se envia una respuesta y se  muestra en pantalla con send

    //consultar 3 viajes del modelo viaje
    const promiseDb =[];

    promiseDb.push( Viaje.findAll({limit:3}) );
    promiseDb.push( Testimonial.findAll({limit:3}) )
    try {
        const resultado = await Promise.all(promiseDb);
        res.render('inicio',{
            pagina:'Inicio',
            clase: 'home',
            todosviajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error)
    }


   
}
const paginanosotros =(req,res)=>{    
    res.render('nosotros',{
        pagina:'Nosotros'
    });
}
const paginaviajes = async(req,res)=>{    
    //consulta ala base
    const todosviajes = await Viaje.findAll();// retorna todo lo que esta en la base de datos en la tabla    
    // console.log(viajes);

    res.render('viajes',{
        pagina:'Viajes',
        todosviajes
    });
}
const paginatestimoniales =async(req,res)=>{    
    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales',{
            pagina:'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
    
}


//muestra un viaje por es slung que tra de la base de datos
const paginadetalleviaje = async (req,res)=>{
    // console.log(req.params);
    const { viaje } = req.params;
    console.log(req.params);
    try {
        
        const resultado = await Viaje.findOne({where : { slug:viaje }}) // consulta y trae un solo resultado y le aplica un where
        res.render('Detalleviaje',{
            pagina:'informacion viaje',
            resultado
        })
    } catch (error) {
        console.log(error)
    }
}



export {
    paginainicio,
    paginanosotros,
    paginaviajes,
    paginatestimoniales,
    paginadetalleviaje
}