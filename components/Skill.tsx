import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Skill } from '../helpers/types'

type Props = {
    skill: Skill
    directionLeft?: boolean
}

export const SkillItem = ({ skill, directionLeft }: Props) => {
  return (
    <motion.div
        className='group relative cursor-pointer rounded-full p-2 md:p-4 xl:p-4 shadow-neon-blue hover:shadow-neon-cream'
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{ duration: 1, }}
        whileInView={{ opacity: 1, x: 0 }}
    >
        <div className='relative w-16 h-16 md:w-20 md:h-20 fitler group-hover:grayscale transition duration-300 ease-in-out'>
            <Image
                src={`/${skill.name}.png`}
                alt={skill.name}
                layout="fill"
                objectFit="cover"
                className='rounded-full'
            />
        </div>

        <div className='absolute top-0 left-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white h-20 w-20 md:w-28 md:h-28 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100'>{skill.proficiency}%</p>
            </div>
        </div>
    </motion.div>
  )
}
