import { User } from "@/context/loginContext";
import router from "next/router";


//handle the function with time and user
export const CheckTokenExpiration = (timeToker:number, setUser:React.Dispatch<React.SetStateAction<User>>)=>{
if(!timeToker) return;

const expirationDate = timeToker
console.log(expirationDate,"Time given")


const now = new Date().getTime();
console.log(now,"nooooowww")

if(now >= expirationDate){
  
console.log("seuUSerss")
    setUser({email:"",password:""})
    router.push('/') 
}else{
    console.log("contando.....")
   setTimeout(()=>CheckTokenExpiration(timeToker,setUser), 20 * 1000)//verificate each 20seg
}
   

}