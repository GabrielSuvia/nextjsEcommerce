'use client';
import React from "react";
import { RegisterForm } from "@/app/components/resgisterForm";
const Register: React.FC = ()=>{
   
    
    return (<div style={{background:'lightblue', height:'auto'}}>
        <div style={{position:'relative', top:'0',right:'-500px' , border:'2px solid', width:'300px'}}>
     <h2 className="text-center">Register</h2>
        <RegisterForm/>
        </div>
        </div> )
}
export default Register;