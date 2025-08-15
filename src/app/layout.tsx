'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
//revisar contextUser of state
  return (
    <html>
    <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
  </body>
  </html>
  );
}
