'use client';
import React, {useState } from "react";
import { MarketProduct } from "@/app/components/productMarkets";
import SearchProducts  from "../../components/search";
import { ICart } from "@/context/loginContext";
const Products = ()=>{

const loadProduct:ICart[] = [{id:'sad2-d234-342w-dsf4',name:"celular A1",  description:"dasdda",price:"34", stock:20, imgUrl:"celular",categoryid:"celular"},
    {id:'sad2-d234-342w-d1f4',name:"celular A1",  description:"dasddada",price:"131", stock:20, imgUrl:"celular",categoryid:"celular"},
    {id:'sad2-d234-342w-34f4',name:"celular B1",  description:"dasddasd",price:"123", stock:20, imgUrl:"celular",categoryid:"calular"},
    {id:'sad2-d234-342w-43f4',name:"televisor C1",  description:"dasddaasd",price:"110", stock:20, imgUrl:"celular",categoryid:"television"},
    {id:'sad2-d234-342w-r3f4',name:"televisor D1",  description:"dasddaasd",price:"156", stock:20, imgUrl:"celular",categoryid:"television"},
    {id:'sad2-d234-342w-4ff4',name:"accesorio E1",  description:"dasddasa",price:"178", stock:20, imgUrl:"celular",categoryid:"accesorios"},
    {id:'sad2-d234-342w-h6f4',name:"accesorio F1",  description:"dasddsda",price:"198", stock:20, imgUrl:"celular",categoryid:"accesorios"}]

const [product, setProduct] = useState<ICart[] | []>([])
//fetching axios: productos estaticoss

const handleFilter = (category:string)=>{
    if(category === "All"){
        setProduct([...loadProduct])
    };
        const filterProduct = loadProduct.filter((prod)=> prod.categoryid ===category ) 
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