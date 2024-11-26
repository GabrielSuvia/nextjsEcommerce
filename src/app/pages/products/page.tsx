'use client';
import React, {useEffect, useState } from "react";
import { MarketProduct } from "@/app/components/productMarkets";
import SearchProducts  from "../../components/search";
import { ICart } from "@/context/loginContext";


const Products = ( )  =>{
const [dataBefore, setDataBefore] = useState<ICart[]>([]);
const [data , setData] = useState<ICart[] | []>([])

/* = [{id:'sad2-d234-342w-dsf4',name:"celular A1",  description:"dasdda",price:"34", stock:20, imgUrl:"celular",categoryid:"celular"},]
*/
useEffect(()=> {
     const urlBack ='http://localhost:3003/Products' 
     const fetchData = async () => {
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
    fetchData();
},[])


const handleFilter = (category:string)=>{
 
    if((category === "All")){
        console.log(dataBefore,"sinentrear")
        if(dataBefore.length>0){
            console.log(dataBefore,"true")
            setData([...dataBefore])
        }
    }else{
        if(data.length > 0){ 
            setDataBefore([...data]) ;
            const filterProduct = data.filter((prod)=> prod.categoryid ===category ) 
            setData([...filterProduct])
           }

    }
}   //     minHeight: '100vh'

    return (<div className="main-Conteiner" style={{background:'lightblue', minHeight: '100vh', position:'relative', margin:'0px'}}>
            
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
         <MarketProduct data ={data.length> 0?data:[]}/> 
        
        </div>
        </div>)
}

export default Products;