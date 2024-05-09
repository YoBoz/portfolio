import AnimatedText from '@/componenets/AnimatedText'
import Layout from '@/componenets/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, {useEffect, useRef} from 'react'
import iii from '../../public/pfp 1.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/componenets/Skills'
import Experience from '@/componenets/Experience'
import Education from '@/componenets/Education'


const AnimatedNumber = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000})
    const isInView = useInView(ref,{once:true});

    useEffect(() => {
        springValue.on("change", (latest)=> {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        } )
        }
    ,[springValue, value])

    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    },[isInView, value, motionValue])

    return (
        <span ref={ref}>
        </span>
    )
}

const about = () => {
    return (
        <>
            <Head>
                <title>
                    Ibrahim Rathwala | About Page
                </title>
                <meta name='description' content='Get to know me more..' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Passion Fuels Purpose!"} className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>
                                About Me
                            </h2> 

                            <p className='font-medium'>
                                Hello! I'm Ibrahim Rathwala, a dedicated third-year Computer Science student at Heriot-Watt University Dubai, specializing in Artificial Intelligence.
                                With a perfect GPA of 4.0 and a strong interest in data-driven projects, I'm always eager to apply my analytical skills and technical knowledge in practical settings.
                            </p>

                            <p className='font-medium my-4'>
                                My passion lies in designing and developing innovative digital solutions that enhance user engagement and effectiveness.
                                Whether it’s creating dynamic features for a collaborative brainstorming platform like Brainwave or developing a physical Mastermind game using a Raspberry Pi, I bring a commitment to technical excellence and user-centered design to every project.
                            </p>

                            <p className='font-medium my-4'>
                                I'm proficient in modern web technologies including React, Next.js, and Node.js, and I'm well-versed in a variety of programming languages like Python, Java, and JavaScript. I also have a strong foundation in frameworks like TensorFlow and PyTorch.
                                I look forward to the opportunity to bring my skills and passion for technology and data to your next project.
                            </p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl bottom-2 border-2 border-gray-800 bg-light p-9 dark:bg-dark dark:border-light'>
                            <div className='absolute top-0 -right-3 -z-10  w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                            <Image src={iii} alt="YoBoz" className='w-full h-auto rounded-2xl'priority/>
                        </div>

                        <div className='col-span-2 flex flex-col items-end'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumber value={5}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center py-10'>
                                <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumber value={2}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills/>
                    <Education/>
                    <Experience/>
                </Layout>
            </main>
        </>
    )
}

export default about
