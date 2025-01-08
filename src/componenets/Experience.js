import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between 
        md:w-[80%]'>
            <Lilcon refrence={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target='_blank'
                    className='text-primary capitalize dark:text-primaryDark'
                >@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm '>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}
const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        < div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-2 w-[4px] h-full bg-dark origin-top dark:bg-light ms:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position={"Software Engineer Intern"}
                        companyLink={"https://www.linkedin.com/company/ukr-group/mycompany/"}
                        company={"UKR Group"}
                        time={"June 2024-September 2024"}
                        address={"Dubai, UAE"}
                        work={"Developed a custom CRM solution using PHP and MySQL, incorporating advanced data cleaning techniques in Python to streamline client data integration and enhance overall data accuracy. Implemented an eSignature platform for efficient contract signing and email dispatch, resulting in a 59% reduction in operational costs for the company."}
                    />
                    <Details
                        position={"President Art Club"}
                        companyLink={"https://www.hw.ac.uk/dubai/"}
                        company={"Heriot-Watt University"}
                        time={"April 2024-Present"}
                        address={"Dubai, UAE"}
                        work={"President of the Art Club, leading a diverse community of 200+ students. Spearheaded engaging and innovative sessions, fostering creativity and collaboration among members. Collaborated closely with the Student Council to organize successful events, including Halloween celebrations, enhancing the university's social and cultural fabric."}
                    />
                    <Details
                        position={"Teaching Assistant"}
                        companyLink={"https://www.hw.ac.uk/dubai/"}
                        company={"Heriot-Watt University"}
                        time={"September 2024-Present"}
                        address={"Dubai, UAE"}
                        work={"Helped Students in courses that included Artificial Intelligence and Intelligent Agents, Language Processors, Data Structures and Algorithms and Programming Languages"}
                    />
                    <Details
                        position={"Research Associate"}
                        companyLink={"https://www.hw.ac.uk/dubai/"}
                        company={"Heriot-Watt University"}
                        time={"Feb 2024-May 2024"}
                        address={"Dubai, UAE"}
                        work={"Actively collaborated with the WattMUN 2024 executive research team to create well-structured agendas and comprehensive background materials. Organized training sessions, imparting valuable insights on policy research methodologies, diplomatic strategies,and effective communication."}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience
