import * as yup from 'yup'

export const schema = yup.object().shape({
    email:yup.string().email("invalid email format").required("the email is required"),
    password:yup.string().min(8,"the password at least 8 character long").required("the password is required")
})

export interface ILoginData{
    email:string,
    password: string
}