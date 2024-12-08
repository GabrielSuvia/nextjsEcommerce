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
        setUser({userId:"",email:"",password:""})
       router.push('/') 
   }

console.log(user.email, "Navbar")


return (<nav className="navbar navbar-light bg-primary sticky-top" >
<Link  className="nav-link" href="/">Home</Link>
<Link className="nav-link" href="/pages/about">About</Link>
<Link className="nav-link" href="/pages/products">Products</Link>
{!user.email? (<>
<Link className="nav-link" href="/pages/register">Register</Link>
<Link className="nav-link" href="/pages/login">Login</Link> 
</>): 
(<>
<Link className="nav-link" href="/pages/mycarts">Mycarts</Link>
<button className="btn btn-primary" onClick={handleUser}>Logout</button>
</>)}

</nav>
)
}