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
    return (<>
     
        <h1>My shooping cart</h1>
       <MyCart/>
       <button onClick={handleSendProducts}>confirm purchase</button>
       <ModalCarts closeModal={closeModal} optionModal={optionModal} />
        </> )
}
export default MyCarts;