import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const BlogsHero = () => {
  return (
    <section className={`${styles.paddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-start flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className={styles.blogHeroHeading}
          >
            MY BLOG
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogsHero;
