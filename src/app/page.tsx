'use client';
import React from 'react';
import { ContextUser} from '../context/loginContext';
import Home from './pages/home/page';


const MyApp: React.FC = () => {
  return (
     <ContextUser>
           <Home/>
     </ContextUser>
  );
};

export default MyApp;