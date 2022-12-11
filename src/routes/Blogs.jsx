import React from 'react';
import { BlogsHero, BlogsList } from '../sections';

const Blogs = () => {
  return (
    <section className="h-screen">
      <BlogsHero />
      <BlogsList />
    </section>
  );
};

export default Blogs;
