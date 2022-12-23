import { motion } from 'framer-motion';
import React from 'react';
import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';
import { FaFolder } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { exploreProjects } from '../constants';

const ProjectsCard = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.paddings} ${styles.innerWidth} grid grid-cols-auto grid-auto-flow-row gap-5 md:gap-5 lg:gap-5 xl:gap-5 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3`}
    >
      {exploreProjects.map((items) => (
        <motion.div
          key={items.title}
          variants={slideIn('up', 'tween', 0.5, 1)}
          className={`col-span-1 sm:mb-5 border sm:min-w-full md:min-w-3/4 lg:min-w-1/2 xl:min-w-1/3 sm:min-h-40 md:min-h-48 lg:min-h-64 xl:min-h-80 rounded-xl cursor-pointer`}
        >
          <div
            className={`${styles.projectBoxPaddings} flex flex-col justify-center gap-6`}
          >
            <div className={`flex mt-5 justify-between items-center`}>
              <FaFolder className={`${styles.icons}  text-cyan-500`} />
              <FiExternalLink className={`${styles.icons} text-white`} />
            </div>
            <div className="">
              <p className="font-bold mb-5 text-white sm:text-[23px] text-[20px]">
                {items.title}
              </p>
              <p className="font-normal sm:text-[23px] text-[20px] text-secondary-white">
                {items.intro}
              </p>
            </div>
            <ul
              className={`flex gap-5 flex-wrap text-secondary-white ${styles.bottomPaddings}`}
            >
              {items.techStack.map((items) => (
                <li key={items} className="border p-2 w-fit rounded-lg">
                  {items}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsCard;
