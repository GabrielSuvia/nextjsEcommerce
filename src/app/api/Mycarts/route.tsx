import { pathBackend } from "@/app/helpers/pathBackend";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req:NextRequest){
//usuario y su carrito
try {
   const info = await req.json();
  const orderInfo = {userId:info.user,products:info.cart}
  
  //sending to microservice of stripe to get the url
console.log("hol1")
   const urlServer = `${pathBackend}/payment/withStripe`
   const order = await fetch(urlServer,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(orderInfo)
   })
   console.log("hola2", order)
   const dato = await order.json()
   console.log("BACKEND COMUNICACION MICROSRVICIO",dato)
   //return of backend nestjs the data of url
   return NextResponse.json({message:"request succefully", data:dato})

} catch (error) {
   return NextResponse.json({message:"bad request"},{status:400})
}
   
  
//send data of request to db post
}