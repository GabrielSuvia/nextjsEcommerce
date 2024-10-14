'use client';
import React, {useState } from "react";
import { MarketProduct } from "@/app/components/productMarkets";
import SearchProducts  from "../../components/search";
import { Iproduct } from "@/app/components/productMarkets";
const Products = ()=>{

const loadProduct:Iproduct[] = [{name:"celular A1",price:"34", modelo:"xy", category:"celular", description:"dasdda"},
    {name:"celular S2",price:"34", modelo:"xy", category:"celular", description:"dasdda"},
    {name:"television",price:"31", modelo:"x4y", category:"television", description:"dasdda"},
    {name:"television",price:"31", modelo:"3t", category:"television", description:"dasdda"},
    {name:"teclado",price:"31", modelo:"xyc", category:"accesorios", description:"dasdda"},
    {name:"mouse",price:"31", modelo:"xyx", category:"accesorios", description:"dasdda"},
    {name:"monitor",price:"31", modelo:"xyd", category:"accesorios", description:"dasdda"}]

const [product, setProduct] = useState<Iproduct[] | []>([])
//fetching axios: productos estaticoss

const handleFilter = (category:string)=>{
    if(category === "All"){
        setProduct([...loadProduct])
    };
        const filterProduct = loadProduct.filter((prod)=> prod.category ===category ) 
        setProduct([...filterProduct])
}

    return (<div className="main-Conteiner" style={{background:'lightblue', minHeight: '100vh', position:'relative'}}>

        <h1>the best products of the markets</h1>
       
        <div style={{display:'flex', justifyContent:'center', position:'relative',left:'-300px'}}>

        
        <h1>Category of products</h1>
       
    
         <ul style={{position:'relative', right:'-50px', top:'20px'}}>
         <SearchProducts/>
         <br />
         <li>
               <button onClick={()=>handleFilter('All')} >All</button> 
        </li>
            <li>
               <button onClick={()=>handleFilter('celular')} >Celular</button> 
            </li>

            <li>
            <button onClick={()=>handleFilter('television')} >Television</button> 
            </li>
 
            <li>
            <button onClick={()=>handleFilter('accesorios')} >Accesorios</button> 
            </li>
         </ul>
        
         <MarketProduct product ={product.length> 0?product:loadProduct}/> 
        
        </div>
        </div>)
}
export default Products;