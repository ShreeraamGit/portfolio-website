import React, { useEffect } from 'react';
import styles from '../styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../reduxFeatures/blogsSlice';
import { Blogcard } from '../components';

const BlogsList = () => {
  const { blogs } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  //console.log(blogs);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div
        className={`${styles.innerWidth} mx-auto gap-12 relative justify-start flex lg:flex-row lg:flex-wrap flex-col `}
      >
        <div className="gradient-02 z-0" />
        {blogs.map((items) => (
          <Blogcard key={items._id} blogs={items} />
        ))}
      </div>
    </section>
  );
};

export default BlogsList;
