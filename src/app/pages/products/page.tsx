'use client';
import React, {useEffect, useState } from "react";
import { MarketProduct } from "@/app/components/productMarkets";
import SearchProducts  from "../../components/search";
import { ICart } from "@/context/loginContext";
import { pathBackend } from "@/app/helpers/pathBackend";
import path from "path";

interface ICategories{
    id:string;
    name:string;
    date:Date;
}
const Products = ()  =>{

const [data , setData] = useState<ICart[] | []>([])
const [longData, setLongData] = useState<ICart[]>([])
const [validateArr, setValidateArr] = useState<string[]>([])

const urlProduct =`${pathBackend}/Products`;
const urlCategories =`${pathBackend}/categories`; 
//function of fetch
const fetchData = async (urlBack:string) => {
    try {
        const res = await fetch(urlBack);
        if(!res.ok){
            throw new Error('Error server');
        };
        const response = await res.json();
        if(urlBack === urlProduct){
            setData([...response.products])
            setLongData([...response.products])
        }else{
           const categoriesList = response.categories.map((cat:ICategories)=> cat.name)
          setValidateArr([...categoriesList])
        }
    } catch (error) {
        throw new Error('There is an error') }
};
//load of list's products
useEffect(()=> {
       fetchData(urlProduct);
       fetchData(urlCategories)
},[])
//Filter or search product
const handleFilter = async (category:string)=>{
    if(data.length < longData.length){
     await fetchData(urlProduct);
    }
    
    if(category !== "All" ){
        if(validateArr.includes(category)){ 
            //filter for category
            const filterProduct = longData.filter((prod)=> {console.log("prod",prod.categoryid.name,"===", category) ;
            return prod.categoryid.name ===category }) 
            setData([...filterProduct])
           }else{

            if(category !== ""){
                //Searching of data
                const query = category
               const functionFetch = async ()=>{
                const response = await fetch(`/api/searchPro?query=${encodeURIComponent(query.trim())}`)
                const searchProduc = await response.json();
                setData([...searchProduc.rest])
                }
               await functionFetch();
           };
    }
  }
}
    return (<div className="main-Conteiner" style={{background:'lightblue', minHeight: '100vh', position:'relative', margin:'0px', padding:'10px'}}>
            
        <h1>the best products of the markets</h1>
        <div style={{display:'flex', justifyContent:'center', position:'relative',left:'-300px',height:'100%'}}>
        <h1>Category of products</h1>

         <ul style={{position:'relative', right:'-50px', top:'20px'}}>
         <SearchProducts handleFilter={handleFilter}/>
         <br />
            <li>
               <button onClick={()=>handleFilter('All')} >All</button> 
            </li>
            <li>
               <button onClick={()=>handleFilter('smartphone')} >Smartphone</button> 
            </li>
            <li>
            <button onClick={()=>handleFilter('mouse')} >Mouse</button> 
            </li>
            <li>
            <button onClick={()=>handleFilter('keyboard')} >Keyboard</button> 
            </li>
            <li>
            <button onClick={()=>handleFilter('monitor')} >Monitor</button> 
            </li>
         </ul>
         <MarketProduct data ={data.length> 0?data:[]}/> 
        </div>
        </div>)
}
export default Products;