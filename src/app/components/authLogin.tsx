'use client';
import React, { useEffect } from "react"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ILoginData,schema } from "../helpers/validationLogin"
import { userSett } from "@/context/loginContext";
import { useRouter } from "next/navigation";
import { FetchToDb } from "../helpers/fetchToApi";
import Link from "next/link";

export const LoginAuth = ()=>{

const {user,setUser} = userSett();
const Router = useRouter();

const {register,
    handleSubmit,
    formState:{errors, isSubmitting},
}= useForm<ILoginData>({
     resolver:yupResolver(schema),
     mode:'onChange'
})

const onSubmit = async (data:ILoginData)=>{
    const url = 'http://localhost:3000/api/Auth';
   const responseApi = await FetchToDb(url,'POST',data)
   console.log('Login response',responseApi.user)
   setUser(responseApi.user)
   Router.push('/')
}
    return(<div data-testid="login-auth">

<form className="container mt-3" onSubmit={handleSubmit(onSubmit)} >

<div className="mb-3" style={{textAlign:'center'}}>
    <label htmlFor="email">email</label>
    <input type="email" id="email" {...register("email")} style={{ width: '250px' }}/>
    {errors.email && <p>{errors.email.message}</p>}
</div>

<div className="mb-3" style={{textAlign:'center'}}>
    <label htmlFor="password">password</label>
    <input type="password" id="password" {...register("password")} style={{ width: '250px' }} />
    {errors.password && <p>{errors.password.message}</p>}
</div>
<div style={{ textAlign: 'center' }}>
<button type="submit" id="btn1" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting?'Logging in...':'Login'}</button>
</div>
</form>
<p style={{textAlign:'center'}}>do you have an account?<Link id="link" href="/pages/register">signup</Link> </p>
    </div>)

}