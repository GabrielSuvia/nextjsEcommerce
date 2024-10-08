import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
const userLogin = await req.json()
console.log(userLogin,"Comunicacion de la ruta")
try {
    console.log('login fetched',userLogin)
    //fetch the data and compare the email and password
    //colocarlo en el conexto
 return NextResponse.json({message:"user received", user: userLogin},{status:200})
 //return NextResponse.redirect(new URL('/', req.url))
} catch (error) {
   return NextResponse.json({message:"bad request"},{status:400})
}}