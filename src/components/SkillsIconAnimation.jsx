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

const SkillsIconAnimation = () => {
  return (
    <motion.div
      variants={slideIn('left', 'tween', 1.5, 1)}
      className={`relative  w-full md:-mt-[20px] -mt-[12px] flex justify-center items-center ${styles.paddings}`}
    >
      <div className="flex w-full lg:w-[40%] justify-evenly gap-2">
        <motion.div variants={fadeIn('right', 'tween', 2, 0.5)}>
          <Icon as={SiJavascript} boxSize={50} color="#F6E05E" />
        </motion.div>
        <motion.div variants={fadeIn('left', 'tween', 2.5, 0.5)}>
          <Icon as={FaReact} boxSize={50} color="#76E4F7" />
        </motion.div>
        <motion.div variants={fadeIn('right', 'tween', 3, 0.5)}>
          <Icon as={SiRedux} boxSize={50} color="#6B46C1" />
        </motion.div>
        <motion.div variants={fadeIn('left', 'tween', 3.5, 0.5)}>
          <Icon as={SiNextdotjs} boxSize={50} color="#FFFFFF" />
        </motion.div>
        <motion.div variants={fadeIn('right', 'tween', 4, 0.5)}>
          <Icon as={DiNpm} boxSize={50} color="#E53E3E" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsIconAnimation;

/*<motion.div
      variants={slideIn('left', 'tween', 1.5, 1)}
      className="relative w-full md:-mt-[20px] -mt-[12px]"
    >
      <div className={`flex justify-center items-center ${styles.paddings} `}>
        <div className="flex w-full lg:w-[40%] justify-evenly">
          <Icon as={SiJavascript} boxSize={50} color="#F6E05E" />
          <Icon as={FaReact} boxSize={50} color="#76E4F7" />
          <Icon as={SiRedux} boxSize={50} color="#6B46C1" />
          <Icon as={SiNextdotjs} boxSize={50} color="#FFFFFF" />
          <Icon as={DiNpm} boxSize={50} color="#E53E3E" />
        </div>
      </div>
    </motion.div>*/
