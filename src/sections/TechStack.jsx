import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { techStack } from '../constants';

const TechStack = () => (
  <section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings} ${styles.innerWidth} mx-auto ${styles.flexCenter} flex flex-col relative w-full md:-mt-[20px] -mt-[12px]`}
    >
      <TypingText title="|  My Tech-Stack" textStyles="text-center" />
      <motion.div
        variants={fadeIn('right', 'tween', 1.3, 1)}
        className={` ${styles.flexCenter}  mt-[14px] md:flex-wrap gap-4 flex-col md:flex-row text-[18px] lg:text-[27px]   text-white leading-[32px] tracking-widest`}
      >
        {techStack.map((items) => (
          <span
            key={items}
            className="border font-normal sm:text-[32px] text-secondary-white text-[20px] text-center sm:px-10 px-6 rounded-md"
          >
            {items}
          </span>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default TechStack;
