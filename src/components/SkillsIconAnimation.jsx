import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { DiNpm } from 'react-icons/di';
import { Icon } from '@chakra-ui/react';
import styles from '../styles';
import { slideIn, fadeIn } from '../utils/motion';
import { useBreakpointValue } from '@chakra-ui/react';

const SkillsIconAnimation = () => {
  return (
    <motion.div
      variants={slideIn('left', 'tween', 1.5, 1)}
      className={`relative  w-full md:-mt-[20px] -mt-[12px] flex justify-center items-center ${styles.paddings}`}
    >
      <div className="flex w-full lg:w-[40%] justify-evenly gap-4 md:gap-7 lg:gap-14">
        <motion.div variants={fadeIn('right', 'tween', 2, 0.5)}>
          <SiJavascript className={`${styles.icons} text-yellow-300`} />
        </motion.div>
        <motion.div variants={fadeIn('left', 'tween', 2.5, 0.5)}>
          <FaReact className={`${styles.icons} text-cyan-400`} />
        </motion.div>
        <motion.div variants={fadeIn('right', 'tween', 3, 0.5)}>
          <SiRedux className={`${styles.icons} text-violet-500`} />
        </motion.div>
        <motion.div variants={fadeIn('left', 'tween', 3.5, 0.5)}>
          <SiNextdotjs className={`${styles.icons} text-white`} />
        </motion.div>
        <motion.div variants={fadeIn('right', 'tween', 4, 0.5)}>
          <DiNpm className={`${styles.icons} text-red-500`} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsIconAnimation;
