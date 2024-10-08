'use client';
import React from 'react';
//import  MyCarts from './pages/mycarts/page';
import { ContextUser} from '../context/loginContext';
import Home from './pages/home/page';

 // Ajusta la ruta según la ubicación real de UserContext
 //<div><MyCarts/></div>
const MyApp: React.FC = () => {
  return (
     <ContextUser>
           <Home/>
     </ContextUser>
  );
};

export default MyApp;