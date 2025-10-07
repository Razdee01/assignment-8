import React from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="w-11/12 mx-auto">
          <NavBar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default MainLayout;