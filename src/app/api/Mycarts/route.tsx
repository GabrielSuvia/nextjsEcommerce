import { NextRequest, NextResponse } from "next/server";

export async function POST (req:NextRequest){
//usuario y su carrito
console.log("req of api",req)
   const dataForSending = await req.json();
   console.log("api",dataForSending)

   return NextResponse.json({data:dataForSending})
//send data of request to db post
}