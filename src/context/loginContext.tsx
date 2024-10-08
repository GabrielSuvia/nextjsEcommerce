'use client';
import React, { ReactNode } from "react";
import { useState,useContext, createContext } from "react"

export interface User{
    email:string;
    password:string;
}


interface arrayChangeUser{
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    cart: string[];
    setCart: React.Dispatch<React.SetStateAction<string[]>>;
}
export const UserContext = createContext<arrayChangeUser | undefined>({user:{
    email:"",
    password:"",

}, setUser:(e)=>{},cart:[],setCart:(e)=>{}});//initial valuea


export const ContextUser : React.FC <{ children: React.ReactNode }> = ({ children }) =>{

    const [user, setUser] = useState<User>({
        email:"",
        password:"",

    })

    const [cart, setCart] = useState<string[]>([])

    return (
    <UserContext.Provider value={{user,setUser,cart,setCart}}>
       {children}
    </UserContext.Provider>
    )
}

export function userSett(){
    const contex = useContext(UserContext)
    if(!contex){
        throw new Error('Error in context ')
    }
    return contex;
}