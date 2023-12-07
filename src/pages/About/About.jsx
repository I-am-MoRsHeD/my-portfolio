// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from "framer-motion"
import 'aos/dist/aos.css';
import Aos from 'aos';

const About = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <motion.h1
                initial={{ opacity: 0.5, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                className="text-5xl style text-center font-bold mb-10">From Nothing To Something</motion.h1>

            {/* about me section */}
            <div className='flex justify-center mb-10 gap-32 items-center'>
                <div className='w-1/2'>
                    <h3 className='text-2xl font-bold mb-4'>About Mine</h3>
                    <p className=' mb-4'>Hello!I am Md Morshed from Chattogram,Bangladesh.I am a MERN Stack Developer and i can build websites in condition of user friendly,based on user comportablity.I can make Frontend websites using obviously Javascript,React,TailwindCSS,Vanilla CSS and others which needed i can apply into site.</p>
                    <p className=' mb-4'>My persistent and selfmotivate skills and behaviour help me to stay focused on my work and projects until it complete.My positive thinking,solving errors and other interpersonal skills help me to get rid of any trouble situation.  </p>
                    <p className=' mb-4'>I hope this introduction give you a good overview about me as a developer and person,and i am eagerly excited and strongly ready for the upcoming challenge.I am eagerly ready for taking the challenge from your side also and want to blend my passionate skills in your projects!</p>
                    <p className=''>If you have any further questions or would like to discuss potential opportunities, please feel free to reach out. I'm excited about the possibility of working together. Have a great day! Thank you.</p>
                </div>
                <img className='w-2/6 ' src="https://i.ibb.co/48VBTXq/IMG-20231113-WA0038.jpg" alt="" />
            </div>
            {/* skills */}
            <div className='my-32'>
                <h2
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-4xl font-bold text-center mb-20 style">My Skills</h2>
                {/* skills bar */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className='grid grid-cols-7 justify-center gap-16 items-center'>

                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">90%</div>
                        <span className='block ml-4 mb-1'>HTML5</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block ml-4 mb-1'>CSS3</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">90%</div>
                        <span className='block ml-4 mb-1'>Tailwind</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block ml-1 mb-1'>Bootstrap</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block ml-1 mb-1'>JavaScript</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">85%</div>
                        <span className='block ml-4 mb-1'>React JS</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">90%</div>
                        <span className='block ml-4 mb-1'>Firebase</span>
                    </div>


                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className='grid grid-cols-7 mt-10 justify-center gap-16 items-center'>

                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">70%</div>
                        <span className='block ml-4 mb-1'>Node JS</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block mb-1'>Express JS</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">85%</div>
                        <span className='block mb-1'>Mongo DB</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block ml-4 mb-1'>Axios</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">75%</div>
                        <span className='block ml-4 mb-1'>Stripe</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">75%</div>
                        <span className='block text-center mb-1'>Tanstack Query</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block ml-4 mb-1'>JWT</span>
                    </div>


                </div>
            </div>
            {/* education */}
            <div className='my-20'>
                <h1 data-aos="fade-up"
                    data-aos-duration="2000" className="text-5xl style text-center font-bold mb-10">Education</h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li data-aos="fade-up"
                    data-aos-duration="2000">
                        <div className="timeline-middle">
                            <FaCheckCircle />
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">2019-running</time>
                            <h1 className="text-2xl font-black">Omargani MES University College</h1>
                            <p className='text-lg mt-2'>Bachelor of Business Administration</p>
                        </div>
                        <hr />
                    </li>
                    <li data-aos="fade-up"
                    data-aos-duration="2000">
                        <hr />
                        <div className="timeline-middle">
                            <FaCheckCircle />
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">2016-2018</time>
                            <div className="text-2xl font-black">Hathazari University College</div>
                            <p className='text-lg mt-2'>Higher Secondary Certificate(Intermediate)</p>
                        </div>
                        <hr />
                    </li>
                    <li data-aos="fade-up"
                    data-aos-duration="2000">
                        <hr />
                        <div className="timeline-middle">
                            <FaCheckCircle />
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">2011-2016</time>
                            <h1 className="text-2xl font-black">Madarsha Adarsha High School</h1>
                            <p className='text-lg mt-2'>Secondary School Certificate</p>
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;