import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import { ReactComponent as Menu } from '../assets/menu.svg';

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative text-white`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth}  mx-auto flex justify-between items-center gap-8`}
      >
        <h2 className="font-extrabold antialiased tracking-widest text-[17px] lg:text-[30px] leading-[30.24px] text-white">
          SHREERAAM.DEV
        </h2>
        <Menu />
      </div>
    </motion.nav>
  );
};

export default Navbar;
