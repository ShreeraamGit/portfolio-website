import React from 'react';
import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <main className="bg-primary-black overflow-hidden">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainPage;
