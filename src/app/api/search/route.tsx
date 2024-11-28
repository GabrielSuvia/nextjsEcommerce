import { Iproduct } from "@/app/components/productMarkets";
import { FetchToDb } from "@/app/helpers/fetchToApi";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
const {searchParams} = new URL(req.url);//key searchParams
const query = searchParams.get('query');//arreglo del id buscado o busqueda con palabras
const prodId = await req.json();
console.log("Route Search",prodId)
//if(!query){
 // return NextResponse.json({message:'search query is required'}, {status:400})
//};
console.log("pasando query")
//lista obtenida de la db
try {
    const url = `http://localhost:3003/Products/${prodId}`
    const productsfound = await fetch(url)

    if(!productsfound.ok){
        return NextResponse.json({message:'Error Server', status:500})
    }
     const productList = await productsfound.json()
     const product = productList.products
    
    return NextResponse.json({rest: product},{status:200})
} catch (error) {
    return NextResponse.json({message:"product not found"},{status:404})
}
   
}