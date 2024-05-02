import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'


const CustomLink = ({href, title, className=''}) => {

    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>{title}
        
        
        <span className={`h-[1.5px] inline-block bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/projects" title="Projects" className='mx-4'/>
            {/* <CustomLink href="/blogs" title="Blogs" className='mx-4'/> */}
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href="https://www.linkedin.com/in/ibrahim-rathwala/" target={"_blank"} className='w-6 mr-3' whileHover={{y:-2}} whileTap={{scale:0.9}}>
            <LinkedInIcon/>
        </motion.a>
        <motion.a href="https://github.com/YoBoz" target={"_blank"} className='w-6 mr-3' whileHover={{y:-2}} whileTap={{scale:0.9}}>
            <GithubIcon/>
        </motion.a>
        <motion.a href="https://www.instagram.com/yoboz__?igsh=MTlpbXpwYjBnenVveA%3D%3D&utm_source=qr" target={"_blank"} className='w-6 mr-3' whileHover={{y:-2}} whileTap={{scale:0.9}}>
            <InstagramIcon/>
        </motion.a>
        {/* <Link href="/" target={"_blank"}>
            <InstagramIcon/>
        </Link> */}
        </nav>

        <div className='absolute left-[50%] t-2 translate-x-[-50%]'>
        <Logo/>
        </div>
    </header>
  )
}

export default Navbar
