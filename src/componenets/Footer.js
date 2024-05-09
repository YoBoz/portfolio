import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark text-lg dark:text-light dark:border-light'>
        <Layout className='py-8 flex items-center justify-between'>

        <motion.a href={"/"} className='underline'
            whileHover={{y:-2}} whileTap={{scale:0.9}}
            >Ibrahim Rathwala</motion.a>

            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            
        </Layout>
    </footer>
  )
}

export default Footer
