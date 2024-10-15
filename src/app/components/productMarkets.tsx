'use client';
import { ICart, userSett } from "@/context/loginContext";
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
      product: ICart[]
}

export const MarketProduct: React.FC<Iarr> = ({product})=>{
//render each product
const {user,cart,setCart} = userSett()
//objeto
const handleBuying = (product:ICart)=>{
    if(user.email === ""){
        alert('have to register you first');
         return;
    };
    console.log('SetCartAAA')
        //add al contexto
   user.email?  setCart([...cart,product]):""
    
}

    return(<>
    <div className="container" style={{display:'flex', flexWrap: 'wrap', gap:'100px', position:'relative',left:'200px'}}>
    {product.map((prod,index)=>{
        return (<div  key={index} data-testid="product-name">

         <h2>Product:<Link style={{textDecoration:'none'}} href={`/pages/products/${index+1}`}>{prod.name}</Link></h2>  
            <p>Price:{prod.price}</p>
            <img src="" alt="NH" />
            <p>Description:{prod.description}</p>
            {user?<button onClick={()=>handleBuying(prod)}>Add</button>:""} 
            <br />
           </div>)
    })}
    </div>
    
    </>)
}