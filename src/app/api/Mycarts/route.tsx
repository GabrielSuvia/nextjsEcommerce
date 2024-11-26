import { FetchToDb } from "@/app/helpers/fetchToApi";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req:NextRequest){
//usuario y su carrito
try {
   const info = await req.json();
  console.log("ROUTES",info)
  const orderInfo = {userId:info.user,products:info.cart}
   const urlServer = 'http://localhost:3003/orders/create'
   const order = await fetch(urlServer,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(orderInfo)
   })
   const dato = await order.json()
   console.log("APIIIII",dato,":otra_",order.body, "info", orderInfo)
   return NextResponse.json({message:"request succefully", data:dato})

} catch (error) {
   return NextResponse.json({message:"bad request"},{status:400})
}
   
  
//send data of request to db post
}