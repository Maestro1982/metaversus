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
        <div className='absolute hidden md:block lg:block md:bottom-48 lg:bottom-20 md:right-16 lg:right-20 md-[35px] lg:w-[70px] md:h-[35px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6880]'>
          <img src='/people-01.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute hidden md:block lg:block md:top-40 lg:top-10 md:left-16 lg:left-20 md:w-[35px] lg:w-[70px] w-[35px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6880]'>
          <img src='/people-02.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute hidden md:block lg:block md:top-[45%] lg:top-1/2 md:left-[50%] lg:left-[45%] md:-[35px] lg:w-[70px] md:h-[35px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6880]'>
          <img src='/people-03.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute hidden md:block lg:block md:top-56 lg:top-60 md:left-32 lg:left-60 md:w-[90px] lg:w-[196px] md:h-[75px] lg:h-[150px] p-[6px] rounded-[24px] bg-[#5d6880]'>
          <img
            src='/upside-down.png'
            alt='upside down'
            className='w-full h-full'
          />
          <img
            src='/avatar-01.png'
            alt='avatar'
            className='absolute md:w-4 md:h-4 md:top-[47%] lg:top-[55%] md:left-[10%] lg:left-[15%]'
          />
          <img
            src='/avatar-02.png'
            alt='avatar'
            className='absolute md:w-4 md:h-4 md:top-[47%] lg:top-[55%] md:left-[15%] lg:left-[20%]'
          />
          <img
            src='/avatar-03.png'
            alt='avatar'
            className='absolute md:w-4 md:h-4 md:top-[47%] lg:top-[55%] md:left-[20%] lg:left-[25%]'
          />
          <p className='absolute text-white font-normal md:text-[5px] lg:text-[10px] md:top-[55%] lg:top-[55%] md:left-[40%] lg:left-[40%]'>
            +264 has joined
          </p>
          <p className='absolute text-white md:text-[8px] lg:text-[16px] md:top-[70%] lg:top-[75%] md:left-3 lg:left-[15%] lg:leading-[23px]'>
            The Upside Down
          </p>
        </div>
        <div className='absolute hidden md:block lg:block md:top-40 lg:top-10 md:right-32 lg:right-80 md:w-[90px] lg:w-[196px] md:h-[75px] lg:h-[150px] p-[6px] rounded-[24px] bg-[#5d6880]'>
          <img
            src='/hawkins-lab.png'
            alt='hawkins lab'
            className='w-full h-full'
          />
          <img
            src='/avatar-01.png'
            alt='avatar'
            className='absolute md:w-4 md:h-4 md:top-[47%] lg:top-[55%] md:left-[10%] lg:left-[15%]'
          />
          <img
            src='/avatar-02.png'
            alt='avatar'
            className='absolute md:w-4 md:h-4 md:top-[47%] lg:top-[55%] md:left-[15%] lg:left-[20%]'
          />
          <img
            src='/avatar-03.png'
            alt='avatar'
            className='absolute md:w-4 md:h-4 md:top-[47%] lg:top-[55%] md:left-[20%] lg:left-[25%]'
          />
          <p className='absolute text-white font-normal md:text-[5px] lg:text-[10px] md:top-[55%] lg:top-[55%] md:left-[40%] lg:left-[40%]'>
            +264 has joined
          </p>
          <p className='absolute text-white md:text-[8px] lg:text-[16px] md:top-[70%] lg:top-[75%] md:left-3 lg:left-[15%] lg:leading-[23px]'>
            Hawkins Lab
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
