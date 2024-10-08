import React from "react"
import { userSett } from "@/context/loginContext";

export const MyCart: React.FC = ()=>{
  //arreglo de pedidos del cliente
  const {cart, setCart} = userSett();

  const handleDelete = (id:number)=>{
    console.log("handleDelete",id)
    //use id of del prod
   const prodDelete = cart.filter((prodId,index)=>index !== id)
   console.log("prodDelete",prodDelete)
   setCart([...prodDelete])
  }
  
//setCart(listProduct)//setCart, can not change the state and rendered in the same time
console.log(cart)
    return(<>
    <ul>
    {cart?.map((number,index)=>{
     return  (<> <li key={index} >{number}</li> 
            <button onClick={()=>handleDelete(index)}>delete</button>
            </>)
      })}
    </ul>
       
    </>)
}