'use client';
import { useParams } from "next/navigation";


const ProductDetail = ()=>{
const query = useParams();
const productId = query.id

    return (<>
    <h1>Detail of Products {productId}</h1>
          <p>{productId}</p>
    </>)

}
export default ProductDetail