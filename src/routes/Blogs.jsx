import React, { Suspense } from 'react';
import { BlogsHero } from '../sections';
import CircularProgress from '@mui/material/CircularProgress';

const BloglistComponent = React.lazy(() => import('../sections/BlogsList'));

const Blogs = () => {
  return (
    <section className="">
      <BlogsHero />
      <Suspense
        fallback={
          <div className="h-screen flex flex-col lg:flex-row justify-start lg:justify-center gap-10 lg:items-start items-center text-[40px]">
            <CircularProgress color="success" />
            <h1 className="text-white">Loading Please Wait .........</h1>
          </div>
        }
      >
        <BloglistComponent />
      </Suspense>
    </section>
  );
};

export default Blogs;
