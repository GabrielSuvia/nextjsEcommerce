'use client';
import React from "react";
import { useState,useContext, createContext } from "react"
//inciso a,c, d: uso de unkown instead any, e,f
export interface User{
    userId:String,
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
    userId:"",
    email:"",
    password:"",

}, setUser:(e)=>{},cart:[{id:'',name:'',description:'',price:'',stock:0,imgUrl:'', categoryid:{}}],setCart:(e)=>{}});//initial valuea

export const ContextUser : React.FC <{ children: React.ReactNode }> = ({ children }) =>{

    const [user, setUser] = useState<User>({
        userId:"",
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
export default {
    user: { email: '', password: '' },
    setUser: () => {},
    cart: [],
    setCart: () => {},
  };