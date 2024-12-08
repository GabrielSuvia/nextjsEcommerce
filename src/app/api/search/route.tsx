import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
const {searchParams} = new URL(req.url);//key searchParams
const prodId = await req.json();

console.log("pasando query")
try {
    const url = `http://localhost:3003/Products/${prodId}`
    const productsfound = await fetch(url)

    if(!productsfound.ok){
        console.log("TRUE")
        return NextResponse.json({message:'Error Server', status:500})
    }
     const productList = await productsfound.json()
     const product = productList.products
    
    return NextResponse.json({rest: product},{status:200})
} catch (error) {
    return NextResponse.json({message:"product not found"},{status:404})
}
   
}