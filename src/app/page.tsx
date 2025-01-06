'use client';
import Head from 'next/head';
import React from 'react';
import { ContextUser} from '../context/loginContext';
import Home from './pages/home/page';


const MyApp: React.FC = () => {
  return (<>
    <Head>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <title>My Next.js App</title>
  </Head>
     <ContextUser>
           <Home/>
     </ContextUser>
     </> );
};

export default MyApp;