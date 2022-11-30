'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| People on the World' textStyles='text-center' />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles='text-center'
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img
          src='/map.png'
          alt='map'
          className='w-full h-full object-contain'
        />
        <div className='absolute lg:bottom-20 lg:right-20 lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6880]'>
          <img src='/people-01.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute lg:top-10 lg:left-20 lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6880]'>
          <img src='/people-02.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute lg:top-1/2 lg:left-[45%] lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6880]'>
          <img src='/people-03.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute top-64 lg:top-60 left-20 lg:left-60 w-[50px] lg:w-[196px] h-[37px] lg:h-[150px] p-[6px] rounded-[24px] bg-[#5d6880]'>
          <img
            src='/upside-down.png'
            alt='upside down'
            className='w-full h-full'
          />
          <img
            src='/avatar-01.png'
            alt='avatar'
            className='absolute lg:top-[55%] lg:left-[15%]'
          />
          <img
            src='/avatar-02.png'
            alt='avatar'
            className='absolute lg:top-[55%] lg:left-[20%]'
          />
          <img
            src='/avatar-03.png'
            alt='avatar'
            className='absolute lg:top-[55%] lg:left-[25%]'
          />
          <p className='absolute text-white font-normal lg:text-[10px] lg:top-[55%] lg:left-[40%]'>
            +264 has joined
          </p>
          <p className='absolute text-white lg:text-[16px] lg:top-[75%] lg:left-[15%] lg:leading-[23px]'>
            The Upside Down
          </p>
        </div>
        <div className='absolute top-52 lg:top-60 left-56 lg:left-60 w-[50px] lg:w-[196px] h-[37px] lg:h-[150px] p-[6px] rounded-[24px] bg-[#5d6880]'>
          <img
            src='/hawkins-lab.png'
            alt='hawkins lab'
            className='w-full h-full'
          />
          <img
            src='/avatar-01.png'
            alt='avatar'
            className='absolute top-[55%] left-[15%]'
          />
          <img
            src='/avatar-02.png'
            alt='avatar'
            className='absolute top-[55%] left-[20%]'
          />
          <img
            src='/avatar-03.png'
            alt='avatar'
            className='absolute top-[55%] left-[25%]'
          />
          <p className='absolute text-white font-normal lg:text-[10px] lg:top-[55%] lg:left-[40%]'>
            +264 has joined
          </p>
          <p className='absolute text-white lg:text-[16px] lg:top-[75%] lg:left-[15%] lg:leading-[23px]'>
            Hawkins Lab
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
