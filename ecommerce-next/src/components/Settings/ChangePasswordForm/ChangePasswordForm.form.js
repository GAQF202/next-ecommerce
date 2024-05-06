import * as Yup from "yup"

export function initialValues(){
    return{
        password:"",
        repeatPassword: "",
    }
}

export function validationScheme(){
    return Yup.object({
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
    })
}