import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import styles from '../styles';
import { motion } from 'framer-motion';
import { FaMoon } from 'react-icons/fa';

function FullScreenMenu({ isOpen, setIsMenuOpen }) {
  const [isRotated, setIsRotated] = useState(false);

  const handleMenuClose = () => {
    setTimeout(() => {
      setIsMenuOpen((prev) => !prev);
    }, 850);
  };

  return (
    <div
      className={`${
        isOpen ? '' : 'hidden'
      } fixed inset-0 z-50 bg-gray-900 bg-opacity-75`}
    >
      <div
        className={`flex flex-col w-full max-w-full h-screen mx-auto py-6 bg-menu-color shadow-xl text-[25px] lg:text-[40px] ${styles.xPaddings} py-8 relative `}
      >
        <div className="flex justify-end items-center ">
          <motion.div
            animate={{ rotate: isRotated ? 360 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => setIsRotated(!isRotated)}
          >
            <RxCross1 onClick={handleMenuClose} className="" />
          </motion.div>
        </div>

        <div className="mx-auto flex flex-col justify-center items-center gap-16 lg:gap-20 mt-[11rem]">
          <Link
            onClick={handleMenuClose}
            className="underline underline-offset-8"
            to="/"
          >
            {'home'.toUpperCase()}
          </Link>
          <Link
            className="underline underline-offset-8"
            onClick={handleMenuClose}
            to="projects"
          >
            {'projects'.toUpperCase()}
          </Link>
          <Link
            className="underline underline-offset-8"
            onClick={handleMenuClose}
            to="blogs"
          >
            {'blogs'.toUpperCase()}
          </Link>
          <Link
            className="underline underline-offset-8"
            onClick={handleMenuClose}
            to="/"
          >
            {'resume'.toUpperCase()}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FullScreenMenu;

/*<Link
          onClick={handleMenuClose}
          className="underline underline-offset-8"
          to="/"
        >
          {'home'.toUpperCase()}
        </Link>
        <Link
          className="underline underline-offset-8"
          onClick={handleMenuClose}
          to="projects"
        >
          {'projects'.toUpperCase()}
        </Link>
        <Link
          className="underline underline-offset-8"
          onClick={handleMenuClose}
          to="blogs"
        >
          {'blogs'.toUpperCase()}
        </Link>
        <Link
          className="underline underline-offset-8"
          onClick={handleMenuClose}
          to="/"
        >
          {'resume'.toUpperCase()}
        </Link>*/
