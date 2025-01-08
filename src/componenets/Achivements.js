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
      Achivements
    </h2>

    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-2 w-[4px] h-full bg-dark origin-top dark:bg-light ms:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
            type={"Deputy Principal’s Award"}
            time={"2023 & 2024"}
            info={"Awarded Academic Excellence Award two consecutive years in recognition of outstanding scholastic performance, achieving Grade A in 6+ undergraduate courses for two consecutive years."}
            />
            <Details
            type={"RTA x Alibaba Hackthon Best Solutions Champion"}
            time={"2024"}
            info={" Ranked third place and won the best solutions champion for my solution for improving taxi services in UAE."}
            />
            <Details
            type={"Top 10 in Samsung x UNDP Hackathon"}
            time={"2024"}
            info={" Came Top 10 globally presenting innovative solution that helps farmers in agriculture"}
            />
        </ul>
    </div>
    </div>
  )
}

export default Achivements
