import React from 'react';
import { BlogsHero, BlogsList } from '../sections';

const Blogs = () => {
  return (
    <section className="h-fit">
      <BlogsHero />
      <BlogsList />
    </section>
  );
};

export default Blogs;
