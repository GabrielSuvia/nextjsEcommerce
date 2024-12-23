import { pathBackend } from "@/app/helpers/pathBackend";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req:NextRequest){
//usuario y su carrito
try {
   const info = await req.json();
  const orderInfo = {userId:info.user,products:info.cart}
   const urlServer = `${pathBackend}/orders/create`
   const order = await fetch(urlServer,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(orderInfo)
   })
   const dato = await order.json()
   return NextResponse.json({message:"request succefully", data:dato})

} catch (error) {
   return NextResponse.json({message:"bad request"},{status:400})
}
   
  
//send data of request to db post
}