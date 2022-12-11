import React, { useEffect } from 'react';
import styles from '../styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../reduxFeatures/blogsSlice';
import { Blogcard } from '../components';
import CircularProgress from '@mui/material/CircularProgress';

const BlogsList = () => {
  const { blogs, loading, author } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  //console.log(blogs);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      {loading ? (
        <div className="h-screen flex flex-col lg:flex-row justify-start lg:justify-center gap-10 lg:items-start items-center text-[40px]">
          <CircularProgress color="success" />
          <h1 className="text-white">Loading Please Wait .........</h1>
        </div>
      ) : (
        <div
          className={`${styles.innerWidth} mx-auto gap-12 relative justify-start flex lg:flex-row lg:flex-wrap flex-col `}
        >
          <div className="gradient-03 z-0" />
          {blogs.map((items) => (
            <Blogcard key={items._id} blogs={items} author={author} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogsList;
