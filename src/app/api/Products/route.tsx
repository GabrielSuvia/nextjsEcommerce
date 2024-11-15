import { FetchToDb } from '@/app/helpers/fetchToApi';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    console.log("Request received in API:");

   // const params = req.nextUrl.searchParams;
    //const userId = params.get("userId"); // Ejemplo de cómo obtener un parámetro llamado userId
    try {
        const urlServer = "http://localhost:3003/products";
        const productCalled = await FetchToDb(urlServer,'GET',null)
       
        const lists = productCalled;
        
        console.log("server 2",lists)


      console.log(lists.products,"product")

        return NextResponse.json({message:"get all the products", product:lists.products},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Server error"},{status:500})
    }

}
   