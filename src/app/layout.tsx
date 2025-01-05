'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ContextUser } from '@/context/loginContext';
import { Navbar } from './components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <body>
        <ContextUser>
        <Navbar/>
          {children}
        </ContextUser>
      </body>
    </html>
  );
}
