'use client';
import React, { useEffect } from "react";
import { userSett } from "@/context/loginContext";

const Payment = ()=>{
//i can to call the library or the stripe
const {setUser} = userSett();

useEffect(() => {
  const userData = localStorage.getItem('user');
  if (userData) {
    setUser(JSON.parse(userData));
    return
  }
  return
}, []);

    return(<>
    <h1>Characteristics of the purchasing</h1>
        <h2>Product: The best product of the world</h2>
        <p>Quantity: </p>
        </>)
}
export default Payment;