import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
 return (
  <div className='max-w-7xl mx-auto'>
   <Navbar></Navbar>
   <Outlet></Outlet>
   <Footer></Footer>
  </div>
 );
};

export default MainLayout;