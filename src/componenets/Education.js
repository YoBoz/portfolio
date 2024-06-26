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
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}
const Education = () => {
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
        Education
    </h2>

    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-2 w-[4px] h-full bg-dark origin-top dark:bg-light ms:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
            type={"Bachelor Of Science In Computer Science"}
            time={"2022-Present"}
            place={"Heriot-Watt University, Dubai"}
            info={"Relevant courses included Data structures and algorithms, Programming Languages, Hardware Software Interface, Software Engineering, Web Programming, Database Management Systems, AI and Intelligent Agents, Data Communications and Networking."}
            />
            <Details
            type={"High School"}
            time={"2010-2022"}
            place={"Delhi Private School, Sharjah"}
            info={"Science Stream courses included Physics, Maths, Chemistry, Computer Science."}
            />
        </ul>
    </div>
    </div>
  )
}

export default Education
