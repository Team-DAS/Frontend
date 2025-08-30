import React from 'react';
import Navbar from '@/shared/layout/Navbar';
import Footer from '@/shared/layout/Footer';

interface HomepageLayoutProps {
  children: React.ReactNode;
}

export default function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <> 
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
} 