import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { useNavigate } from 'react-router-dom';
import { FullScreenMenu } from '../components';
import { ReactComponent as Menu } from '../assets/menu.svg';

const Navbar = () => {
  let homePage = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();

    homePage('/home');
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} relative py-8 text-white`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth}  mx-auto flex justify-between items-center gap-8`}
        >
          <button
            onClick={() => {
              handleButtonClick();
            }}
            className=""
          >
            <h2 className="font-extrabold antialiased tracking-widest text-[17px] lg:text-[30px] leading-[30.24px] text-white cursor-pointer">
              SHREERAAM.DEV
            </h2>
          </button>
          <Menu className="" onClick={handleMenuToggle} />
        </div>
      </motion.nav>
      <FullScreenMenu setIsMenuOpen={setIsMenuOpen} isOpen={isMenuOpen} />
    </>
  );
};

export default Navbar;
