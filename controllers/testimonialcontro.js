import { Testimonial } from "../Model/testimoniales.js";
const guardartestimonial = async(req,res)=>{
    //validar
    const errores =[];
    const {nombre,email,mensaje} = req.body;
    if(nombre.trim()===''){
        errores.push({mensaje:"El Nombre esta vacio"});
    }
    if(email.trim()===''){
        errores.push({mensaje:"El Correo esta vacio"});
    }
    if(mensaje.trim()===''){
        errores.push({mensaje:"El Mensaje esta vacio"});
    }

    if(errores.length > 0){
        //consultar testimoniales  existentes
        //sino se envian los testimoniales marca error
        const testimoniales = await Testimonial.findAll();

        //mostrar vista cone rrores
        res.render('testimoniales',{
            pagina:'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
        })
    }else{
        //almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo: email,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }

    }
}

export {
    guardartestimonial
}