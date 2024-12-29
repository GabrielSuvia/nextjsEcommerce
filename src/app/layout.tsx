'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ContextUser } from '@/context/loginContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <body>
        <ContextUser>
        <Navbar/>
          {children}
        <Footer/>
        </ContextUser>
      </body>
    </html>
  );
}
