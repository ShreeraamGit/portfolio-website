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
      className={`${styles.paddings} ${styles.innerWidth} mx-auto gap-7 flex flex-col xl:flex-row  xl:items-center xl:flex-wrap`}
    >
      {exploreProjects.map((items) => (
        <motion.div
          variants={slideIn('up', 'tween', 0.5, 1)}
          className={`w-full border rounded-lg h-fit xl:h-[43rem] xl:w-[31.5%]`}
        >
          <div
            className={`${styles.projectBoxPaddings} flex flex-col justify-center gap-6`}
          >
            <div className={`flex mt-5 justify-between items-center`}>
              <FaFolder className={`${styles.icons}  text-cyan-500`} />
              <FiExternalLink className={`${styles.icons} text-white`} />
            </div>
            <div className="">
              <p className="font-extrabold mb-5 text-white sm:text-[23px] text-[20px]">
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
                <li className="border p-2 w-fit rounded-lg">{items}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsCard;
