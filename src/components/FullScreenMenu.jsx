import React from 'react';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import styles from '../styles';

function FullScreenMenu({ isOpen, setIsMenuOpen }) {
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`${
        isOpen ? '' : 'hidden'
      } fixed inset-0 z-50 bg-gray-900 bg-opacity-75`}
    >
      <div
        className={`${styles.xPaddings} border relative flex flex-col w-full max-w-full h-screen mx-auto py-6 bg-menu-color shadow-xl text-[25px] lg:text-[40px] items-center justify-center gap-16 lg:gap-20`}
      >
        <RxCross1
          onClick={handleMenuClose}
          className="absolute top-16 right-10"
        />
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
  );
}

export default FullScreenMenu;
