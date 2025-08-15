'use client';
import { userSett } from "@/context/loginContext"
import React from "react"
import { FetchToDb } from "../helpers/fetchToApi";
import { pathBackend, pathFront } from "../helpers/pathBackend";
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
            if(cart.length === 0){
              alert("you need to add products")
              return;
            }
            localStorage.setItem('user',JSON.stringify(user))
            //enviar lista de compra a la db
            const activeFunction=async()=>{
            const url=`${pathFront}/api/Mycarts`
            const response = await FetchToDb(url,'POST',cartUser)
            //receive the url 
            const dataResponsive = response.data
 console.log("RESPUESTA",dataResponsive.url)
            //i redirect to the page of succes to show the characteristics of the products
            //windows.alert = response.data.url
           window.location = dataResponsive.url;
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