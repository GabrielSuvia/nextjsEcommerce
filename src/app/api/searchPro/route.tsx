import { Iproduct } from "@/app/components/productMarkets"
import { NextRequest, NextResponse } from "next/server"

export async function GET (req:NextRequest,res:NextResponse){

    const {searchParams} = new URL(req.url)
    const query = searchParams.get('query')
try {
    const url = 'http://localhost:3003/Products'
    const respons = await fetch(url)
    const productList = await respons.json()
    const product = productList.products
    
    if(query && product){
        const regex = new RegExp(query,'i')
       
        const findRegex = product.filter((value:Iproduct)=> regex.test(value.name) )
        console.log("REGEX 333",findRegex)
        return NextResponse.json({message:"request succesfully",rest: findRegex},{status:200})
    }

} catch (error) {
   return NextResponse.json({message:'product not found'},{status:404}) 
}
}


