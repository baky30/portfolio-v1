import React from 'react'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1}}
        className='h-screen relative text-center flex flex-col
            md:text-left md:flex-row max-w-7xl px-10 mx-auto items-center justify-evenly'
    >
        <h1 className='sectionTitle'>
            About
        </h1>
        <motion.img
            src='/jordan.jpg'
            className='-mb-20 md:mb-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
            initial={{ opacity: 0, x: -300 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true }}
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-3xl mb-3 font-semibold text-cream'>
                Here is a <span className='underline decoration-orange/50'>little</span> summary
            </h4>
            <ul className='list-disc space-y-3 ml-5'>
                <li className='text-left'>Strong experience in building and development Front-end applications based on React.</li>
                <li className='text-left'>Experience in developing cross-platform mobile applications on React Native</li>
                <li className='text-left'>Excellent team player with good analytical, strategic planning and interpersonal and communication skills</li>
                <li className='text-left'>Compliance with standards and rules, use of modern technologies when writing code</li>
            </ul>
        </div>
    </motion.div>
  )
}
