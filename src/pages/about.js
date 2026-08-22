import AnimatedText from '@/componenets/AnimatedText'
import Layout from '@/componenets/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import iii from '../../public/pfp 1.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/componenets/Skills'
import Experience from '@/componenets/Experience'
import Education from '@/componenets/Education'
import TransitionEffecct from '@/componenets/TransitionEffecct'
import Achivements from '@/componenets/Achivements'


const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }
        , [springValue, value])

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

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
            <TransitionEffecct/>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Passion Fuels Purpose!"} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 md:my-auto'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>
                                About Me
                            </h2>

                            <p className='font-medium'>
                                Hello! I&apos;m Ibrahim Rathwala, an AI/ML Engineer based in Dubai. I graduated from Heriot-Watt University with First-Class Honours in Computer Science (Artificial Intelligence), and I&apos;m currently pursuing an MS in Computer Science (Machine Learning) at Georgia Tech.
                            </p>

                            <p className='font-medium my-4'>
                                At The Rufescent I build agent modules for HÜSE.AI — a multi-tenant conversational HR platform on WhatsApp serving 20 companies — including its leave balance engine and a policy RAG built on FAISS, sentence-transformers and LangChain with GPT-4o tiered per task to control cost. Outside work I built AOMS, a multi-tenant operations platform with 320+ REST endpoints and a double-entry accounting engine at its core.
                            </p>

                            <p className='font-medium my-4'>
                                I work across the stack — Python, FastAPI, PostgreSQL and Redis on the backend; React, Next.js and React Native on the frontend; PyTorch, TensorFlow and Scikit-learn for ML — and ship with Docker and GitHub Actions. I&apos;m always keen to bring this mix of AI engineering and full-stack delivery to problems that matter.
                            </p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl bottom-2 border-2 border-gray-800 bg-light p-9 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 md:mx-auto'>
                            <div className='absolute top-0 -right-3 -z-10  w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={iii} alt="YoBoz" className='w-full h-auto rounded-2xl' priority />
                        </div>

                        <div className='col-span-2 flex flex-col items-end xl:col-span-10 xl:flex-row xl:items-center xl:justify-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center mr-8'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl xl:items-center'>
                                    <AnimatedNumber value={20} />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center sm:text-base xs:text-sm'>companies served by HÜSE.AI</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center py-10 xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumber value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center sm:text-base xs:text-sm'>years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                    <Achivements />
                </Layout>
            </main>
        </>
    )
}

export default about
