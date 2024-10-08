'use client';
import React from "react"
import { userSett } from "@/context/loginContext"
import Link from 'next/link';
import { useRouter } from "next/navigation";

export const Navbar = ()=>{
const {user, setUser} = userSett()
const router = useRouter()

   const handleUser = ()=>{
      //exit user
        setUser({email:"",password:""})
       router.push('/') 
   }



return (<nav>
<Link href="/">Home</Link>
<Link href="/pages/about">About</Link>
<Link href="/pages/products">Products</Link>
{!user.email? (<>
<Link href="/pages/register">Register</Link>
<Link href="/pages/login">Login</Link> 
</>): 
(<>
<Link href="/pages/mycarts">Mycarts</Link>
<button onClick={handleUser}>Logout</button>
</>)}

</nav>
)
}