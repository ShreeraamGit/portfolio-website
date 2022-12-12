import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';

const CustomLinks = ({ title, textStyles, iconType, to }) => {
  return (
    <motion.div
      variants={slideIn('left', 'tween', 0.6, 1)}
      className={`sm:pt-16 xs:pt-8 pt-12 flex justify-center items-center gap-5 lg:gap-10 text-white`}
    >
      <Link to={to}>
        <button
          className={`${textStyles} text-[20px] lg:text-[30px] antialiased text-secondary-white cursor-pointer decoration-cyan-500 underline underline-offset-8 font-normal`}
        >
          {title}
        </button>
      </Link>
      {iconType}
    </motion.div>
  );
};

export default CustomLinks;
