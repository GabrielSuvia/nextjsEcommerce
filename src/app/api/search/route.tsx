import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
const {searchParams} = new URL(req.url);//key searchParams
const query = searchParams.get('query');

if(!query){
  return NextResponse.json({message:'search query is required'}, {status:400})
};

//lista obtenida de la db
const listProducts =[{name:"celularA",price:"23",description:"dasdasd",category:"celphones"},{
    name:"celularB",price:"23",description:"dasdasd",category:"celphones"
},{
    name:"celularC",price:"23",description:"dasdasd",category:"celphones"
},{
    name:"celularC",price:"23",description:"dasdasd",category:"celphones"
}];

//filtramos
const productfinded = listProducts.filter((prod)=>
prod.name.toUpperCase()=== query.toUpperCase() ||
prod.category.toUpperCase()=== query.toUpperCase() ||
prod.price.toUpperCase()=== query.toUpperCase() ||
prod.description.toUpperCase()===query.toUpperCase()
)
console.log("consulta: ",query.toUpperCase())
console.log(productfinded,"Route api GEt")
    return NextResponse.json({rest: productfinded})
//return NextResponse.json({result:"Invalid product"})
}