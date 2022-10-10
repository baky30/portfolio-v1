import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceCard } from './ExperienceCard'
import { Experience } from '../helpers/types'

type Props = {
  experience: Experience[]
}

export const WorkExperience = ({ experience }: Props) => {
  return (
    <motion.div className='h-screen relative flex flex-col overflow-hidden text-left
     md:flex-row px-10 pt-14 justify-evenly mx-auto items-center'>
        <h1 className='sectionTitle'>Experience</h1>

        <div className='w-full flex p-10 space-x-5 overflow-x-scroll 
          scrollbar-thin scrollbar-track-blue scrollbar-thumb-orange snap-x snap-mandatory'>
            {experience.map((e, i) => <ExperienceCard key={i} exp={e}  />)}
        </div>
    </motion.div>
  )
}
