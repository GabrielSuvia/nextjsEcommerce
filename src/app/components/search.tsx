'use client';
import { useState } from "react";

interface SearchProductsProps {
  handleFilter: (category: string) => void;
}

const SearchProducts: React.FC<SearchProductsProps> = ({handleFilter})=>{
    const [query, setQuery] = useState('');

    return (<>
         <input type="text" placeholder="search products...." value={query} onChange={(e)=>setQuery(e.target.value)}/>
         <button onClick={()=>handleFilter(query)} >search</button>
    </>)

}
export default SearchProducts;