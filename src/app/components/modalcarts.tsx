'use client';
import { userSett } from "@/context/loginContext"
import React from "react"
import { FetchToDb } from "../helpers/fetchToApi";
interface IoptionModal{
    closeModal:()=>void;
    optionModal:boolean;
}
export const ModalCarts: React.FC<IoptionModal> = ({closeModal,optionModal})=>{

if (!optionModal) return null;
const {cart,user,setCart} = userSett()
const cartUser = {cart,user}

console.log("modalCarts",cartUser)

    const handleAsk = (ask:string)=>{
        if(ask==="yes"){
            //enviar lista de compra a la db
            const activeFunction=async()=>{
            const url='/api/Mycarts'
            const response = await FetchToDb(url,'POST',cartUser)
                 
            const dataResponsive = response
            console.log("MODALCARTS:",dataResponsive.data);
            setCart([])
           //the details of buying (views) useRouter() with data of your credit target
           closeModal();
        }
        activeFunction();

        }else{
         closeModal()
        }
    }

    return(<>
    <button onClick={closeModal} >cerrar</button>
     <div>
<p>do you want to confirm purchases</p>
<button onClick={()=>handleAsk('yes')}>Yes</button>
<button onClick={()=>handleAsk('no')}>No</button>
     </div>
    </>)

}