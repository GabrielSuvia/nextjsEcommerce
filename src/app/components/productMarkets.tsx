'use client';
import { userSett } from "@/context/loginContext";
import Link from "next/link"
import React from "react"

export interface Iproduct{
    name:string;
    price:string;
    modelo:string;
    category:string;
    description:string;
}
export interface Iarr{
      product: Iproduct[]
}

export const MarketProduct: React.FC<Iarr> = ({product})=>{
//render each product
const {user,cart,setCart} = userSett()

const handleBuying = (id:number)=>{
    if(user.email === ""){
        alert('have to register you first');
         return;
    };
    console.log('SetCartAAA')
        //add al contexto
   user.email?  setCart([...cart,String(id)]):""
    
}

    return(<>
    <ul>
    {product.map((prod,index)=>{
        return (<li  key={index}>

         <h1>Product:<Link href={`/pages/products/${index+1}`}>{prod.name}</Link></h1>  
            <p>Price:{prod.price}</p>
            <p>Description:{prod.description}</p>
            {user?<button onClick={()=>handleBuying(index)}>Add</button>:""} 
           </li>)
    })}
    </ul>
    
    </>)
}