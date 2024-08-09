import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarContainer from '../Components/Navbar/NavbarContainer';
import BottomNavbarContainer from '../Components/BottomNavbar/BottomNavbarContainer';
import { Toaster } from 'react-hot-toast';

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <>
      <NavbarContainer />
      <div className="pt-20 flex flex-col min-h-screen no-scrollbar"> {/* Adjusted padding to avoid overlap */}
        <main className="w-full flex-1 no-scrollbar">
          <Toaster />
          {/* <Outlet /> Nested routes will render here */}
          {children}
        </main>
      </div>
      <BottomNavbarContainer />
    </>
  );
};

export default Layout;
