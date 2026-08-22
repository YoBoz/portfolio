import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <Lilcon refrence={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}
const Achivements = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    < div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
      Achievements
    </h2>

    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-2 w-[4px] h-full bg-dark origin-top dark:bg-light ms:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
            type={"First-Class Honours"}
            time={"2025"}
            info={"Graduated with a perfect 4.0 GPA, earning First-Class Honours in BSc Computer Science (Artificial Intelligence) at Heriot-Watt University."}
            />
            <Details
            type={"Deputy Principal’s Award for Academic Excellence"}
            time={"2023, 2024 & 2025"}
            info={"Awarded by Heriot-Watt University three consecutive years in recognition of outstanding scholastic performance."}
            />
            <Details
            type={"RTA × Alibaba Hackathon — Best Solution Champion"}
            time={"2024"}
            info={"Ranked 3rd place overall and won Best Solution Champion for a solution improving taxi services in the UAE."}
            />
            <Details
            type={"Top 10 in Samsung × UNDP Hackathon"}
            time={"2024"}
            info={"Came Top 10 globally presenting an innovative solution that helps farmers in agriculture."}
            />
            <Details
            type={"Microsoft Certified: Azure AI Fundamentals (AI-900)"}
            time={"Certification — Microsoft"}
            info={"Microsoft certification covering core AI and machine learning concepts and Azure AI services."}
            />
            <Details
            type={"Machine Learning Specialization"}
            time={"Certification — Coursera"}
            info={"Completed the Machine Learning Specialization on Coursera, covering supervised learning, advanced learning algorithms, and unsupervised learning and recommender systems."}
            />
        </ul>
    </div>
    </div>
  )
}

export default Achivements
