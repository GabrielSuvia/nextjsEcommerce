'use client';
import React from "react";
import { RegisterForm } from "@/app/components/resgisterForm";
import { useState } from "react";

const Register: React.FC = ()=>{
   
    
    return (<div style={{background:'lightblue', minHeight: '100vh', position:'relative', top:'-50px'}}>
        <RegisterForm/>
        </div> )
}
export default Register;