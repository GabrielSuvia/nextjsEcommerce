import { FetchToDb } from '@/app/helpers/fetchToApi';
import { pathBackend } from '@/app/helpers/pathBackend';
import { NextRequest, NextResponse } from 'next/server';
// Define el tipo de datos para la respuest

// Función de manejo de API
export async function POST (req:NextRequest){
const body = await req.json()
try {
    console.log('1',body)
    const api = `${pathBackend}/auth/signup`
    //enviar a la api del back

   // await FetchToDb(api,'POST',body)
   const res = await fetch(api,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
     body:JSON.stringify(body)
 })
console.log("usario registrado",body,"res:", res)
return NextResponse.json({body:body},{status:200})
} catch (error) {
    return NextResponse.json({message:"invalid user"},{status:400})
}
 }

 