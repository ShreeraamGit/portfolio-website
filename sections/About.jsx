'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, slideIn, staggerContainer } from '../utils/motion';
import { techStack } from '../constants';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|  About Me" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Frontend Developer </span>
        with a mix of project and professional experience that includes
        full-stack development of{' '}
        <span className="font-extrabold text-white">
          Single Page Applications{' '}
        </span>
        and a{' '}
        <span className="font-extrabold text-white">
          robust e-commerce site
        </span>
        . Proven ability to identify{' '}
        <span className="font-extrabold text-white">process improvements </span>
        and opportunities for{' '}
        <span className="font-extrabold text-white">code reuse.</span> <br />
      </motion.p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.topPaddings} flex flex-col relative w-full md:-mt-[20px] -mt-[12px]`}
      >
        <TypingText title="|  My Tech-Stack" textStyles="text-center" />
        <motion.div
          variants={fadeIn('right', 'tween', 1.3, 1)}
          className={` ${styles.flexCenter} ${styles.topPaddings} lg:flex-wrap gap-4 flex-col lg:flex-row text-[18px] lg:text-[27px]   text-white leading-[32px] tracking-widest`}
        >
          {techStack.map((items) => (
            <span className="border sm:px-10 px-6 rounded-md">{items}</span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
