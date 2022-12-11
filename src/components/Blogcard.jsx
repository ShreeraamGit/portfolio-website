import React from 'react';
import { motion } from 'framer-motion';
import { BlogTitleText, BlogReadMoreTypingText } from './CustomTexts';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';
import client from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Avatar } from '@mui/material';

const sanityclient = client({
  projectId: 'kqeze5p3',
  dataset: 'production',
  useCdn: true, // turn on CDN usage to reduce latency
});

const Blogcard = ({ blogs, author }) => {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const builder = imageUrlBuilder(sanityclient);
  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=""
    >
      <div className="w-full lg:max-w-[340px] relative z-10 flex flex-col ">
        <img
          // eslint-disable-next-line no-underscore-dangle
          src={urlFor(blogs.mainImage.asset._ref).url()}
          alt="sample"
          className="w-full h-[200px] object-cover  mb-10"
        />
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-start items-center">
            {blogs.authorimage ? (
              <Avatar
                alt={blogs.authorname}
                src={urlFor(blogs.authorimage.asset._ref).width(200).url()}
              />
            ) : (
              <Avatar {...stringAvatar(blogs.authorname)} />
            )}
            <h2 className="text-white leading-[32px] tracking-widest decoration-cyan-500 underline underline-offset-8">
              {blogs.authorname.toUpperCase()}
            </h2>
          </div>
          <BlogTitleText title={blogs.title} />
          <p className="flex-1 mt-[16px] font-normal text-[18px] md:text-[20px] text-[#B0B0B0] leading-[32.4px]">
            {blogs.intro.substring(0, 100)} ....
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto `}
          >
            <BlogReadMoreTypingText
              title="Read More !"
              textStyles="italic leading-5 tracking-widest decoration-cyan-500 underline underline-offset-8"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blogcard;
