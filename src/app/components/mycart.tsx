'use client';
import React, { useEffect, useState } from "react"
import { userSett } from "@/context/loginContext";
import { BotonCart } from "./botonCart";

export const MyCart: React.FC = ()=>{
  //arreglo de pedidos del cliente
  const [total, setTotal] = useState(0)
  const {cart} = userSett();

  const sumaTotal = ()=>{
   let tot=0;
    cart.forEach((pro)=>{
          tot = tot+ Number(pro.price)
   })
   return tot
  }

  useEffect(()=>{
    setTotal(sumaTotal)
  },[total,cart])
  
console.log(cart)
    return(<>
    <ul>
      <br />
      <div style={{display:'flex'}}>
            <h3 style={{position:'relative',left:'-15px'}}>Products</h3>
            <h3 style={{position:'relative',left:'25px'}}>Price</h3>
          </div>
    {cart?.map((prod,index)=>{
     return  (<div> 

          <div style={{display:'flex'}}>
            <li key={index}> {prod.name} </li>
            <p style={{position:'absolute',left:'190px'}}>{prod.price}</p>
          </div>
          <BotonCart index={index} />
            </div>)
      })}
      {total != 0? (<div style={{display:'flex'}}>
            <p style={{position:'relative',left:'110px'}}>Total:{" "+total}</p>
          </div>):''} 
    </ul>
       
    </>)
}