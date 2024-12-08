import { NextRequest, NextResponse } from "next/server";
//solicitado a la db bckend
export async function POST(req:NextRequest){
   
const userLogin = await req.json()//email,password
console.log(userLogin,"Comunicacion de la ruta")
try {
    const urlSign = 'http://localhost:3003/auth/signin';

    const token = await fetch(urlSign,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
       body:JSON.stringify(userLogin)
   })
   const TOKEN = await token.json();
   if(TOKEN){
      console.log("TOKEN: ",TOKEN)
   }
   const userId = TOKEN.user.userId
   const tokens = TOKEN.user.token
 return NextResponse.json({message:"user received", user: {token:tokens, user:{userId, ...userLogin}}},{status:200})
} catch (error) {
   return NextResponse.json({message:"bad request"},{status:400})
}}