import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/componenets/Layout'
import profilePic from '../../public/images/profile/ibrahim.jpeg'
import AnimatedText from '@/componenets/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/componenets/Icons'
import HireMe from '@/componenets/HireMe'
import light from '../../public/images/svgs/miscellaneous_icons_1.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ibrahim Rathwala</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-1'>
          <div className='flex items-center justify-between w-full'>
            <div className=''>
              <Image src={profilePic} alt="YoBoz" className='ml-11 mb-11 w-[80%] h-auto rounded-2xl'></Image>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>

              <AnimatedText text="Transforming Concepts into Real-World Solutions with Code and Design." className='!text-5xl !text-left'/>

              <p className='my-4 text-base font-medium'>
              As a proficient Data Scientist and Full Stack Web Developer, I am committed to transforming concepts into cutting-edge web applications. Delve into my most recent projects and blogs, which highlight my proficiency in data science and full-stack web development.              </p>

              <div className='flex items-center self-start mt-2'>

              <Link href="/Ibrahim Rathwala CV.pdf" target="_blank" 
              className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transperant hover:border-dark
              '
              download={true}
              >Resume <LinkArrow className={"w-6 ml-1"}/>
              </Link>

              <Link href="mailto:ibrahimrathwala@gmail.com" target="_blank"
              className='ml-4 text-lg font-medium capitalize text-dark underline'
              >Contact</Link>
            </div>
            </div>
          </div>
        </Layout>

        <HireMe/>

        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={light} className='w-full h-auto'></Image>
        </div>
      </main>
    </>
  )
}