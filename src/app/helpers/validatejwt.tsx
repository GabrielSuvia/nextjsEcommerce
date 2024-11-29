import { User } from "@/context/loginContext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


//handle the function with time and user
export const CheckTokenExpiration = (timeToker:number, setUser:React.Dispatch<React.SetStateAction<User>>, router:AppRouterInstance)=>{
if(!timeToker) return;

const expirationDate = timeToker
console.log(expirationDate,"Time given")

const now = new Date().getTime();

if(now >= expirationDate){
  
    setUser({userId:"",email:"",password:""})
    router.push('/') 
}else{
    console.log("contando.....")
   setTimeout(()=>CheckTokenExpiration(timeToker,setUser,router), 20 * 1000)//verificate each 20seg
}
   

}