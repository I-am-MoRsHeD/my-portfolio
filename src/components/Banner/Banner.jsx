// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import { motion } from "framer-motion"

const Banner = () => {
    return (
        <div className='flex h-full gap-2 justify-between items-center max-w-6xl mx-auto'>
            <div className='flex-1 ml-1 lg:ml-5'>
                <h1 className='text-lg lg:text-3xl ml-1'>I am a </h1>
                <motion.h1
                    initial={{ opacity: 0.5, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                    className='lg:text-6xl text-4xl font-bold'>Frontend-Focused</motion.h1>
                <motion.h1
                    initial={{ opacity: 0.5, y: 60 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                    className='lg:text-6xl text-4xl font-bold'>MERN Stack</motion.h1>
                <motion.h1
                    initial={{ opacity: 0.5, y: 70 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                    className='lg:text-6xl text-4xl font-bold'>Developer</motion.h1>
                <p className='mt-6 lg:text-lg text-sm font-mono'>Basically MERN Stack Developer works for building websites through javascript,react,tailwindCss and backend techs.Also capable of making user friendly websites and bosting users using ability and satisfaction</p>
                <a href="https://drive.google.com/file/d/1RJpWNr7K2lxfgQAKnP57UUNXYfGqFXAk/view?usp=sharing" className='btn btn-neutral hover:text-black hover:bg-white hover:border-2 mt-3 text-lg lg:text-xl' download>Resume</a>
                <Link to='mailto:mdmorshed0187@gmail.com'><span className='lg:text-2xl text-xl underline ml-5 font-semibold contact '>Contact</span></Link>
            </div>
            <div className='lg:mr-3 mr-0'>
                {/* <img src="https://i.ibb.co/z7R1Dyk/OATH1867-removebg-preview.png" alt="" /> */}
                <img className='border-8 border-t-teal-400 border-b-teal-400 border-r-0 border-l-0 rounded-tl-full rounded-bl-full' src="https://i.ibb.co/Gx5MsyD/IMG-20231113-WA0024-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;