import { NextRequest, NextResponse } from 'next/server';
// Define el tipo de datos para la respuest

// Función de manejo de API
export async function POST (req:NextRequest){
const body = await req.json()
try {
    //enviar a la api del back
console.log("usario registrado",body)
return NextResponse.json({body:body},{status:200})
} catch (error) {
    return NextResponse.json({message:"invalid user"},{status:400})
}
 }

 