import * as yup from "yup"

export const schema = yup.object().shape({
    email:yup.string().email("invalid email format").required("the email is required"),
    name: yup.string().required("the name is required"),
    password:yup.string().min(8,"the password at least 8 character long").required("the password is required"),
    confirPassword: yup.string().min(8,"the password at least 8 character long").required("the confirPassword is required"),
    address: yup.string().required("the address is required"),
    phone: yup.string().required("the number is required"),
    country: yup.string().required("the country is required"),
    city: yup.string().required("the city is required")
})

export interface IFormData{
    email:string,
    name:string,
     password:string,
     confirPassword:string,
     address:string,
     phone:string,//number
     country:string,
     city:string
}