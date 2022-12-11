import React from 'react';
import { Navbar } from '../components';
import { Hero, About, TechStack, Project, Blogs } from '../sections';

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="gradient-04 z-0" />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <TechStack />
      </div>
      <div className="relative">
        <Project />
        <div className="gradient-04 z-0" />
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
