import React from 'react';
import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const MainPage = () => {
  return (
    <main className="bg-primary-black overflow-hidden">
      <Navbar />
      <Suspense fallback={<div className="">Loading .....</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MainPage;
