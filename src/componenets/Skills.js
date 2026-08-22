import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name,x,y}) =>{
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold cursor-pointer 
         bg-dark text-light shadow-dark py-3 px-6 absolute dark:bg-light dark:text-dark
         lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
         '
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x,y:y,transition:{duration:1.5}}}
        viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 mb-10 w-full text-center md:text-6xl md:mt-32'>
        Skills
    </h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold cursor-pointer  bg-dark text-light p-7 shadow-dark dark:bg-light dark:text-dark
         lg:p-6 md:p-4 xs:p-2 xs:text-xs'
        whileHover={{scale:1.05}}
        >
            AI / ML
        </motion.div>

        <Skill name={"Python"} x={"-20vw"} y={"2vw"}/>
        <Skill name={"LangChain"} x={"-5vw"} y={"-9vw"}/>
        <Skill name={"PyTorch"} x={"26vw"} y={"6vw"}/>
        <Skill name={"RAG / FAISS"} x={"-20vw"} y={"-13vw"}/>
        <Skill name={"FastAPI"} x={"15vw"} y={"9vw"}/>
        <Skill name={"TensorFlow"} x={"3vw"} y={"-24vw"}/>
        <Skill name={"Scikit-learn"} x={"20vw"} y={"-13vw"}/>
        <Skill name={"React / Next.js"} x={"-12vw"} y={"16vw"}/>
        <Skill name={"PostgreSQL"} x={"-33vw"} y={"5vw"}/>
        <Skill name={"Docker"} x={"32vw"} y={"-8vw"}/>
        <Skill name={"Redis"} x={"10vw"} y={"22vw"}/>
        <Skill name={"SQL"} x={"-30vw"} y={"-7vw"}/>
        <Skill name={"Azure / AWS"} x={"-2vw"} y={"11vw"}/>
    </div>
    </>
  )
}

export default Skills
