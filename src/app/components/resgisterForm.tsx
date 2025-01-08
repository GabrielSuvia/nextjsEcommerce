'use client';
import React from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData, schema } from "../helpers/validationRegister";
import {FetchToDb} from '../helpers/fetchToApi';
import { useRouter } from "next/navigation";
import Link from "next/link";

export const RegisterForm = ()=>{
const router = useRouter()
    const {register,
        handleSubmit,
        formState:{errors},
        } = useForm<IFormData>({
            resolver:yupResolver(schema),
            mode:'onChange',
        })

    const onSubmit =async (data:IFormData)=>{
   // e.preventDefault(); not necessary
    console.log("datos enviados...",data)
    const Url = 'https://nextjsecommerce-production.up.railway.app/api/Register'
    const datos =await FetchToDb(Url,'POST',data)
    console.log("info",datos.body)
    router.push('https://nextjsecommerce-production.up.railway.app/pages/login')

    }

return (<div>
<form className="container mt-3" onSubmit={handleSubmit(onSubmit)}  style={{maxWidth: '400px', margin: '0 auto'}}>

<div className="mb-3" style={{textAlign:'center'}}>
<label htmlFor="email">email</label>
<input type="email" id="email" {...register("email")} style={{ width: '100%' }} />
{errors.email && <p>{errors.email.message}</p>}
</div>

<div className="mb-3" style={{textAlign:'center'}}>
<label htmlFor="name">name</label>
<input type="text"  id="name" {...register('name')} style={{ width: '100%' }}/>
{errors.name && <p>{errors.name.message}</p>}
</div>

<div className="mb-3" style={{textAlign:'center'}}>
<label htmlFor="password">password</label>
<input  type="password" id="password" {...register('password')} style={{ width: '100%' }}/>
{errors.password && <p>{errors.password.message}</p>}
</div>

<div className="mb-3" style={{textAlign:'center'}}>
<label htmlFor="confirPassword">confirPassword</label>
<input type="password" id="confirPassword" {...register('confirPassword')} style={{ width: '100%' }}/>
{errors.confirPassword && <p>{errors.confirPassword.message}</p>}
</div>

<div className="mb-3" style={{textAlign:'center'}}>
<label htmlFor="address">address</label>
<input type="text" id="address" {...register('address')} style={{ width: '100%' }}/>
{errors.address && <p>{errors.address.message}</p>}
</div>

<div className="mb-3" style={{textAlign:'center'}}>
<label htmlFor="phone">phone</label>
<input type="number" id="phone" {...register('phone')} style={{ width: '100%' }}/>
{errors.phone && <p>{errors.phone.message}</p>}
</div>

<div className="mb-3" style={{textAlign:'center'}}>
<label htmlFor="country">country</label>
<input type="text" id="country" {...register('country')} style={{ width: '100%' }}/>
{errors.country && <p>{errors.country.message}</p>}
</div>

<div className="mb-3" style={{textAlign:'center'}}>
<label htmlFor="city">city</label>
<input type="text" id="city" {...register('city')} style={{ width: '100%' }}/>
{errors.city && <p>{errors.city.message}</p>}
</div>
<div style={{ textAlign: 'center' }}>
<button type="submit" id="btn" className="btn btn-primary w-30">Register</button>
<p style={{textAlign:'center'}}>do you have an account?<Link id="link" href="/pages/login">signin</Link> </p>
</div>
</form>

</div> )}

