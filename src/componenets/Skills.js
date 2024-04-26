import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name,x,y}) =>{
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold cursor-pointer 
         bg-dark text-light shadow-dark py-3 px-6 absolute'
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration:1.5}}
        viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 mb-10 w-full text-center'>
        Skills
    </h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold cursor-pointer  bg-dark text-light p-7 shadow-dark'
        whileHover={{scale:1.05}}
        >
            Development
        </motion.div>

        <Skill name={"HTML"} x={"-20vw"} y={"2vw"}/>
        <Skill name={"CSS"} x={"-5vw"} y={"-9vw"}/>
        <Skill name={"Javascript"} x={"26vw"} y={"6vw"}/>
        <Skill name={"React JS"} x={"-20vw"} y={"-13vw"}/>
        <Skill name={"Next JS"} x={"15vw"} y={"9vw"}/>
        <Skill name={"Node JS"} x={"3vw"} y={"-24vw"}/>
        <Skill name={"Python"} x={"20vw"} y={"-13vw"}/>
        <Skill name={"Tensorflow"} x={"-12vw"} y={"16vw"}/>
        <Skill name={"Git"} x={"-33vw"} y={"5vw"}/>
        <Skill name={"Scikitlearn"} x={"32vw"} y={"-8vw"}/>
        <Skill name={"Pytorch"} x={"10vw"} y={"22vw"}/>
    </div>
    </>
  )
}

export default Skills
