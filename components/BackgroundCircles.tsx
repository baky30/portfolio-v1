import React from 'react'
import { motion } from 'framer-motion'

export const BackgroundCircles = () => {
  return (
    <motion.div
        className='relative flex items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            scale: [1, 3, 1],
        }}
        transition={{ duration: 2 }}
    >
        <div className='w-[200px] h-[200px] border border-cream rounded-full
         mt-52 absolute animate-ping shadow-neon-blue' />
        <div className='w-[300px] h-[300px] border border-cream rounded-full
         mt-52 absolute shadow-neon-purple' />
        <div className='w-[500px] h-[500px] border border-cream rounded-full
         mt-52 absolute shadow-neon-blue animate-pulse' />
        <div className='w-[650px] h-[650px] border border-cream rounded-full
         mt-52 absolute shadow-neon-yellow animate-pulse' />
    </motion.div>
  )
}
