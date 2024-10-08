'use client';
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchProducts = ()=>{
    const [query, setQuery] = useState('');
    const [result, setResult] = useState<any[]>([]);
    const Router = useRouter();
console.log("page search",query)

    const handleQuerySubmit = async(e:FormEvent<HTMLFormElement>)=>{
         e.preventDefault();
         if(query){
          
          const response = await fetch(`/api/search?query=${query.trim()}`)
          const data = await response.json();
          console.log("result",result)
          setResult([...data.rest])
            Router.push(`/pages/products?query=${encodeURIComponent(query.trim())}`)
            
         };
    }


    return (<>
    <form onSubmit={handleQuerySubmit}>
         <input type="text" placeholder="search products...." value={query} onChange={(e)=>setQuery(e.target.value)}/>
         <button type="submit">search</button>

         {result.length>0 && query !== ""? result.map((prod,index)=>(<div key={index}>
           <h1>Product:{prod.name}</h1>  
           <p>Price:{prod.price}</p>
           <p>Description:{prod.description}</p>
           <button>Add</button></div>)) : (<></>)}
    </form>
    </>)

}
export default SearchProducts;