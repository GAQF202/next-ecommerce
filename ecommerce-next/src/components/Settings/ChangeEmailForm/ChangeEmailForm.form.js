import * as Yup from "yup";

export function initialValues(){
    return{
        email:"",
        repeatEmail:""
    }
}

export function validationSchema(){
    return Yup.object({
        email: Yup.string().email(true).required(true),
        // VALIDAR QUE HAGA MATCH CON email Y EN CASO QUE NO SEA EL MISMO DEVUELVE un mensaje
        repeatEmail: Yup.string().email(true).required(true).oneOf([Yup.ref("email")], "Los emails no son iguales")
    })
}