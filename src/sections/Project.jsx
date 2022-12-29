import { motion } from 'framer-motion';
import {
  TypingText,
  ProjectsTitleText,
  CustomLinks,
  ProjectsCard,
} from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FiExternalLink } from 'react-icons/fi';
import { Icon } from '@chakra-ui/react';

const Project = () => {
  return (
    <section className={`${styles.paddings} relative z-10`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="|  Portfolio" textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.4, 1)}
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
        <ProjectsCard />
        <ProjectsTitleText
          title="Other NoteWorthy Projects"
          textStyles="text-center"
        />
        <CustomLinks
          title="View the Archive"
          iconType=<Icon as={FiExternalLink} w={30} h={30} />
          to="/"
          textStyles="font-fira"
        />
      </motion.div>
    </section>
  );
};

export default Project;
