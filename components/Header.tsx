import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

export const Header = () => {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-6xl mx-auto p-5 z-20'>
            <motion.div
                className='flex items-center'
                initial={{
                    x: -300,
                    opacity: 0,
                    scale: 1.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 1.2 }}
            >
                <SocialIcon 
                    url='https://www.linkedin.com/in/aman-bakiev/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon 
                    url='https://t.me/whatdidhesayy'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon 
                    url='https://github.com/baky30'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>

            <motion.div
                className='flex items-center'
                initial={{
                    x: 100,
                    opacity: 0,
                    scale: 1.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 1.2 }}
            >
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
                <SocialIcon 
                    network='email'
                    className='cursor-pointer'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
        </header>
    )
}
