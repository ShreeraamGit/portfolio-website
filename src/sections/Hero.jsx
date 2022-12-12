import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { ReactComponent as React } from '../assets/react.svg';
import { ReactComponent as Redux } from '../assets/reduxNew.svg';
import { ReactComponent as Node } from '../assets/node.svg';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { DiNpm } from 'react-icons/di';
import { Icon } from '@chakra-ui/react';

const Hero = () => (
  <section className={`${styles.paddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          FrontEnd
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>eveloper</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 1.5, 1)}
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
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
