'use client';
import React, { useState } from "react";
import { MyCart } from "@/app/components/mycart";
import { ModalCarts } from "@/app/components/modalcarts";

const MyCarts = ()=>{//en react  node not use object
   // const {cart,user,setCart} = userSett()
   const [optionModal, setOptionModal] = useState(false)
    //const cartUser = {cart,user}

   const openModal = ()=> setOptionModal(true)
   const closeModal = ()=> setOptionModal(false)

    const handleSendProducts = async ()=>{
     //mostrar modal
     setOptionModal(true)
    }
    return (<div style={{background:'lightblue', minHeight: '100vh'}}>
    <div style={{border:'2px solid black', width:'500px', position:'relative', left:'0px', display:'flex'}}>

     <div>
        <h1>My shooping cart</h1>
       <MyCart/>
       <br/>
       <br/>
       <div style={{width:'500px', textAlign:'center'}}>
       <button onClick={handleSendProducts}>confirm purchase</button>
       </div>
       <ModalCarts closeModal={closeModal} optionModal={optionModal} />
    </div>

        </div> 
        </div>)
}
export default MyCarts;