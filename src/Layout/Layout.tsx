import { ReactNode } from 'react';
import NavbarContainer from '../Components/Navbar/NavbarContainer';
import { Toaster } from 'react-hot-toast';
import BottomNavbarContainer from '../Components/BottomNavbar/BottomNavbarContainer';

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
