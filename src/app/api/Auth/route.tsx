import { FetchToDb } from "@/app/helpers/fetchToApi";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
const userLogin = await req.json()
console.log(userLogin,"Comunicacion de la ruta")
try {
    console.log('login fetched',userLogin)
    const api = 'http://localhost:3003/auth/signin'
    await FetchToDb(api,'POST',userLogin)
 return NextResponse.json({message:"user received", user: userLogin},{status:200})
 //return NextResponse.redirect(new URL('/', req.url))
} catch (error) {
   return NextResponse.json({message:"bad request"},{status:400})
}}