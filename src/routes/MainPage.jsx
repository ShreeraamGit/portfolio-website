import React from 'react';
import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const MainPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main className="bg-primary-black overflow-hidden">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[10px] bg-cyan-600 origin-[0%]"
      />
      <Navbar />
      <Suspense fallback={<div className="">Loading .....</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MainPage;
