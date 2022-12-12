import { motion } from 'framer-motion';
import { TypingText, CustomLinks } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

const Blogs = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|  Blogs" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.4, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Have you ever read a{' '}
        <span className="font-extrabold text-white ">monthly blog</span> and
        wished you could tell the world how amazing they are? We’re in the same
        boat.I'll be posting here on the blog every month to share{' '}
        <span className="font-extrabold text-white ">
          what I am up to, code best practices, trending topics, inspiration
        </span>{' '}
        and more.{' '}
      </motion.p>
      <CustomLinks
        title="View Blogs"
        iconType=<Icon as={FaExternalLinkSquareAlt} w={30} h={30} />
        to="blogs"
        textStyles="font-fira"
      />
    </motion.div>
  </section>
);

export default Blogs;
