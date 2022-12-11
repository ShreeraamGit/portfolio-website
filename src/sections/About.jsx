import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

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
        variants={fadeIn('up', 'tween', 0.5, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white decoration-cyan-500 underline underline-offset-8 decoration-4">
          Frontend Developer{' '}
        </span>
        with a mix of project and professional experience that includes
        full-stack development of{' '}
        <span className="font-extrabold text-white ">
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
    </motion.div>
  </section>
);

export default About;
