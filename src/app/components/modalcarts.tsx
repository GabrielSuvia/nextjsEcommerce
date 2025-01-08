'use client';
import { userSett } from "@/context/loginContext"
import React from "react"
import { FetchToDb } from "../helpers/fetchToApi";
import { pathBackend } from "../helpers/pathBackend";
interface IoptionModal{
    closeModal:()=>void;
    optionModal:boolean;
}
export const ModalCarts: React.FC<IoptionModal> = ({closeModal,optionModal})=>{

if (!optionModal) return null;
const {cart,user,setCart} = userSett()
const productId = cart.map((prod)=> prod.id )
const cartUser = {user:user.userId,cart:productId}

console.log("modalCarts",cartUser)

    const handleAsk = async (ask:string)=>{
        if(ask==="yes"){
            //enviar lista de compra a la db
            const activeFunction=async()=>{
            const url=`${pathBackend}/api/Mycarts`
            const response = await FetchToDb(url,'POST',cartUser)
            const dataResponsive = response
            console.log("MODALCARTS:",dataResponsive.dato);
            setCart([])
           //the details of buying (views) useRouter() with data of your credit target
           closeModal();
        }
       await activeFunction();

        }else{
         closeModal()
        }
    }
    
    return(<div style={{background:'Beige', position:'relative', left:'350px', top:'-220px', border:'2px solid black'}}>
    <button onClick={closeModal} style={{position:'relative', left:'440px'}} >cerrar</button>

     <div>

         <p style={{textAlign:'center'}}>do you want to confirm purchases</p>
         <div style={{display:'flex', justifyContent:'space-evenly'}}>
         <button onClick={()=>handleAsk('yes')}>Yes</button>
         <button onClick={()=>handleAsk('no')}>No</button>

    </div>
     </div>
     </div>)

}