'use client';
import { Iproduct } from "@/app/components/productMarkets";
import { FetchToDb } from "@/app/helpers/fetchToApi";
import { useParams } from "next/navigation";
import {useEffect, useState } from "react";


const ProductDetail = ()=>{
   
    const [product, setproduct] = useState<Iproduct>({
        id: "",
        name: "",
        description: "", 
        price: "",
        stock: 0,
        imgUrl: ""
    })

const query = useParams();
const productId = query.id;
useEffect(()=>{
    const url = `http://localhost:3000/api/search`;
    const response = async ()=>{
        try {
            const res = await FetchToDb(url,'POST',productId)
            const prod = {...res.rest}
              setproduct({...prod})
        } catch (error) {
            console.log(error)
        }
    }

    response();
},[])
console.log("pageProductId",product)

    return (<>
    <h1>Detail of Product: {product.name}, {product.id}</h1>
          <p>Price:{product.price}</p>
          <img src={product.imgUrl} alt="NH" />
          <p>Description:{product.description}</p>
    </>)

}
export default ProductDetail