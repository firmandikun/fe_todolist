import Navbar from '@/components/auth/Navbar';
import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <body className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
      <Navbar />
      <main className="mt-0 transition-all duration-200 ease-soft-in-out">
        {children}
      </main>
    </body>
  );
};

export default AuthLayout;
