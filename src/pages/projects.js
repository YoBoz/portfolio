import AnimatedText from '@/componenets/AnimatedText'
import { GithubIcon } from '@/componenets/Icons'
import Layout from '@/componenets/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pfp from '../../public/work7.jpg'
import pfp1 from '../../public/4.png'
import pfp2 from '../../public/R.png'
import pfp3 from '../../public/venigma(1).jpeg'
import pfp4 from '../../public/w.jpg'
import pfp5 from '../../public/ppp.jpg'
import TransitionEffecct from '@/componenets/TransitionEffecct'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark 
        bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs-p-4'>
            <div className='absolute top-0 -right-3 -z-10  w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light
             xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={github} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <Image src={img} alt={title} className='w-[full] h-auto' priority />

            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
                    {summary}
                </p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>

                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:pl-4 sm:pt-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border boder-solid border-dark p-6 relative bg-light dark:bg-dark dark:border-light
        xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10  w-[102%] h-[103%] rounded-[2rem] bg-dark md:-right-3 md:w-[101%] xs:[h-[102%]
            xs:rounded-[1.5rem]'/>
            <Link href={github} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-[350px]' priority />

            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='underline text-lg font-semibold md:text-base'>
                        Visit
                    </Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>
                    Ibrahim Rathwala | Projects Page
                </title>
                <meta name='description' content='Few of my projects...' />
            </Head>
            <TransitionEffecct/>
            <main className='w-full flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Imagination Trumps Knowledge!"} className='mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-0'>
                        <div className='col-span-12 lg:mb-10'>
                            <FeaturedProject
                                title={"Brainwave: A Collaborative Brainstorming Platform"}
                                summary={" Fosters real-time brainstorming and idea exchange through socket.io messaging and collaborative tools like a whiteboard and document annotation. Built on a robust foundation of React.js (frontend) and Node.js (backend) for a dynamic and user-friendly experience. Developed the Virtual Exhibits Feature which allows user to showcase their work and also worked on the responsiveness of the app."}
                                link={"/"}
                                type={"Featured Project"}
                                img={pfp}
                                github={"https://github.com/YoBoz/brain-wave"}
                            />
                            
                            <FeaturedProject
                                title={"Ecosave Sign: A Document Signing Platform"}
                                summary={" Implemented an eSignature platform for efficient contract signing and email dispatch, resulting in a 59% reduction in operational costs for the company."}
                                link={"/"}
                                type={"Featured Project"}
                                img={pfp5}
                                github={"https://github.com/YoBoz/brain-wave"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"Venigma : The AI video Editing tool"}
                                link={"/"}
                                type={"Project"}
                                img={pfp3}
                                github={"https://github.com/YoBoz/Venigma"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"Travel Agent System"}
                                link={"/"}
                                type={"Project"}
                                img={pfp4}
                                github={"https://github.com/YoBoz/Travel-Agent-System"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"Mastermind Game using Raspberry Pi in C and ARM "}
                                link={"/"}
                                type={"Project"}
                                img={pfp1}
                                github={"https://github.com/YoBoz/"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"Tic Tac Toe Game using AI agents"}
                                link={"/"}
                                type={"Project"}
                                img={pfp2}
                                github={"https://github.com/YoBoz/"}
                            />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
