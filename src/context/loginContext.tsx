'use client';
import React, { ReactNode } from "react";
import { useState,useContext, createContext } from "react"

export interface User{
    email:string;
    password:string;
}
export interface ICart{
    id:string,
    name:string,
    description:string,
    price:string,
    stock:number,
    imgUrl:string,
    categoryid:any
    
}

interface arrayChangeUser{
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    cart: ICart[];
    setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
}
export const UserContext = createContext<arrayChangeUser | undefined>({user:{
    email:"",
    password:"",

}, setUser:(e)=>{},cart:[{id:'',name:'',description:'',price:'',stock:0,imgUrl:'', categoryid:{}}],setCart:(e)=>{}});//initial valuea

export const ContextUser : React.FC <{ children: React.ReactNode }> = ({ children }) =>{

    const [user, setUser] = useState<User>({
        email:"",
        password:"",
    })
    const [cart, setCart] = useState<ICart[]>([])
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