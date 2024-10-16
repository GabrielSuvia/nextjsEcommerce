import { useState } from "react"
import { userSett } from "@/context/loginContext"

interface IIndex{
    index:number
}

export const BotonCart :React.FC<IIndex> = ({index})=>{
const [changecolor, setChangeColor] = useState<any>(null)
const {setCart,cart} = userSett()

const changeColorButton = (indexOrColor:any)=>{
   setChangeColor(indexOrColor)
}
const handleDelete = (id:number)=>{
    const prodDelete = cart.filter((prodId,index)=>index !== id)
    console.log("prodDelete",prodDelete)
    setCart([...prodDelete])
}

return (<>

<button style={{backgroundColor: changecolor === index? 'red':'lightblue', cursor: 'pointer' ,transition: 'background-color 0.3s ease',}}
        onClick={()=>handleDelete(index)}
        onMouseEnter={() => setChangeColor(index)} // Cambia el estado solo para el botón específico
      onMouseLeave={() => setChangeColor('lightblue')} > delete</button>

</>)
}