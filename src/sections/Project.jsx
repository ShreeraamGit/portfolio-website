import { motion } from 'framer-motion';
import { TypingText, CustomLinks } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

const Project = () => {
  return (
    <section className={`${styles.paddings} relative z-10`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="|  Portfolio" textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          I like to stay busy and always have a{' '}
          <span className="font-extrabold text-white">
            project in the works
          </span>
          . Explore some of my most notable{' '}
          <span className="font-extrabold text-white">
            applications, articles and clients{' '}
          </span>
          I've dedicated my time to.
        </motion.p>
        <CustomLinks
          title="View Projects"
          iconType=<Icon as={FaExternalLinkSquareAlt} w={30} h={30} />
          to="projects"
        />
      </motion.div>
    </section>
  );
};

export default Project;
