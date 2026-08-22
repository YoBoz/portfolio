import AnimatedText from '@/componenets/AnimatedText'
import { GithubIcon } from '@/componenets/Icons'
import Layout from '@/componenets/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pfp from '../../public/work7.jpg'
import pfp1 from '../../public/4.png'
import pfp3 from '../../public/venigma-card.jpg'
import pfp4 from '../../public/w.jpg'
import pfp5 from '../../public/ppp.jpg'
import aoms from '../../public/aoms.png'
import TransitionEffecct from '@/componenets/TransitionEffecct'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    const imageHref = github || link
    const titleHref = link || github
    const visitClass = (github ? 'ml-4 ' : '') + 'rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:pl-4 sm:pt-4 sm:text-base'
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark 
        bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs-p-4'>
            <div className='absolute top-0 -right-3 -z-10  w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light
             xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            {imageHref ? (
                <Link href={imageHref} target='_blank'
                    className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
                >
                    <Image src={img} alt={title} className='w-full h-auto' priority />
                </Link>
            ) : (
                <div className='w-1/2 overflow-hidden rounded-lg lg:w-full'>
                    <Image src={img} alt={title} className='w-full h-auto' priority />
                </div>
            )}
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                {titleHref ? (
                    <Link href={titleHref} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                    </Link>
                ) : (
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                )}
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
                    {summary}
                </p>
                <div className='mt-2 flex items-center'>
                    {github && (
                        <Link href={github} target='_blank' className='w-10'>
                            <GithubIcon />
                        </Link>
                    )}

                    {link && (
                        <Link href={link} target='_blank' className={visitClass}>
                            Visit Project
                        </Link>
                    )}
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link, github }) => {
    const href = link || github
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border boder-solid border-dark p-6 relative bg-light dark:bg-dark dark:border-light
        xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10  w-[102%] h-[103%] rounded-[2rem] bg-dark md:-right-3 md:w-[101%] xs:[h-[102%]
            xs:rounded-[1.5rem]'/>
            <Link href={github || href} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-[350px]' priority />

            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={href} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={href} target='_blank' className='underline text-lg font-semibold md:text-base'>
                        Visit
                    </Link>
                    {github && (
                        <Link href={github} target='_blank' className='w-8 md:w-6'>
                            <GithubIcon />
                        </Link>
                    )}
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
                                title={"Admin Operations Management System (AOMS)"}
                                summary={"Multi-tenant operations platform (FastAPI, PostgreSQL, Redis, React, React Native) with 320+ REST endpoints spanning an admin dashboard, field mobile app and system-admin console. At its core is a double-entry accounting engine that posts every payment, expense, invoice and asset event as immutable balanced journal entries — powering P&L, balance sheet, cash-flow and AR/AP aging reports with PDF export. Secured with JWT + TOTP 2FA, Redis session revocation, role-based permissions and an append-only audit trail; deployed via Docker Compose with GitHub Actions CI."}
                                link={"https://aoms-xi.vercel.app/"}
                                type={"Featured Project · Live Demo"}
                                img={aoms}
                            />

                            <FeaturedProject
                                title={"Venigma — AI Video Generation & Captioning Tool"}
                                summary={"Web app (Next.js, Flask) for real-time text-to-video generation from user prompts using Hugging Face models and Llama 3 (Groq), with an automatic captioning pipeline — audio extraction + Azure Cognitive Services Speech SDK — producing accurate, time-aligned captions for uploaded videos."}
                                link={"https://github.com/YoBoz/Venigma"}
                                type={"Featured Project"}
                                img={pfp3}
                                github={"https://github.com/YoBoz/Venigma"}
                            />

                            <FeaturedProject
                                title={"Ecosave Sign: A Document Signing Platform"}
                                summary={"eSignature platform built at UKR Group for contract signing and email dispatch, cutting the company's operational costs by 59%."}
                                type={"Featured Project"}
                                img={pfp5}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"Brainwave: A Collaborative Brainstorming Platform"}
                                type={"Project"}
                                img={pfp}
                                github={"https://github.com/YoBoz/Brainwave"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"Travel Agent System"}
                                type={"Project"}
                                img={pfp4}
                                github={"https://github.com/YoBoz/Travel-Agent-System"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"Mastermind Game using Raspberry Pi in C and ARM "}
                                type={"Project"}
                                img={pfp1}
                                github={"https://github.com/YoBoz/Mastermind-Game"}
                            />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
