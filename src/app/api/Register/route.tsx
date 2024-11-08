import { FetchToDb } from '@/app/helpers/fetchToApi';
import { NextRequest, NextResponse } from 'next/server';
// Define el tipo de datos para la respuest

// Función de manejo de API
export async function POST (req:NextRequest){
const body = await req.json()
try {
    console.log('1',body)
    const api = 'http://localhost:3003/auth/signup'
    //enviar a la api del back
    await FetchToDb(api,'POST',body)
console.log("usario registrado",body)
return NextResponse.json({body:body},{status:200})
} catch (error) {
    return NextResponse.json({message:"invalid user"},{status:400})
}
 }

 