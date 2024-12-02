'use client';
import React, {useEffect, useState } from "react";
import { MarketProduct } from "@/app/components/productMarkets";
import SearchProducts  from "../../components/search";
import { ICart } from "@/context/loginContext";
import Router from "next/router";

const Products = ()  =>{

const [data , setData] = useState<ICart[] | []>([])

const fetchData = async () => {
    const urlBack ='http://localhost:3003/Products' 
    try {
        const res = await fetch(urlBack);
        if(!res.ok){
            throw new Error('Error server');
        };
        const response = await res.json();
        setData(response.products)
    } catch (error) {
        throw new Error('There is an error')
    }
};

const handleFilter = (category:string)=>{
      fetchData();
    if((category !== "All")){

        console.log("false")
        if(data.length > 0 && category ===""){ 
            const filterProduct = data.filter((prod)=> prod.categoryid.name ===category ) 
            setData([...filterProduct])
           }else{
           
            if(category !== ""){
                const query = category
               const functionFetch = async ()=>{
                const response = await fetch(`/api/searchPro?query=${encodeURIComponent(query.trim())}`)
                const data = await response.json();
                console.log("result")
                setData([...data.rest])
                 // Router.push(`/pages/products?query=${encodeURIComponent(query.trim())}`)
                
                }
                functionFetch();
           }
       }
    }    
}

useEffect(()=> {
    fetchData();
},[])
  //     minHeight: '100vh'
    return (<div className="main-Conteiner" style={{background:'lightblue', minHeight: '100vh', position:'relative', margin:'0px'}}>
            
        <h1>the best products of the markets</h1>
        <div style={{display:'flex', justifyContent:'center', position:'relative',left:'-300px'}}>
        <h1>Category of products</h1>

         <ul style={{position:'relative', right:'-50px', top:'20px'}}>
         <SearchProducts handleFilter={handleFilter}/>
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
         <MarketProduct data ={data.length> 0?data:[]}/> 
        </div>
        </div>)
}
export default Products;