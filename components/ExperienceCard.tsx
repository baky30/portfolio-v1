import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from '../helpers/types'
import { formattedDate } from '../helpers/helpers'

type Props = {
    exp: Experience
}

export const ExperienceCard = ({ exp }: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7
        flex-shrink-0 snap-center bg-blue p-10 w-[400px] md:w-[600px] xl:w-[900px] 
        opacity-40 hover:opacity-100 transition-opacity duration-200'
    >
        <motion.div
            className="relative w-32 h-32 rounded-full"
            initial={{ y: -100, opacity: 0}}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Image 
                src={'/wigs.jpg'}
                alt={'wiggins'}
                layout="fill"
                objectFit="cover"
                className='rounded-full'
            />
        </motion.div>

        <div>
            <h4 className='text-4xl font-light text-cream'>{exp.position}</h4>
            <p className='font-bold text-2xl mt-1'>{exp.companyName}</p>

            <div className='flex space-x-2 my-2'>
                {exp.technologies.map(t => (
                        <div key={t} className='relative w-10 h-10'>
                            <Image 
                                src={`/${t}.png`}                
                                alt={t}
                                layout="fill"
                                objectFit="cover"
                                className='rounded-full'
                            />
                        </div>
                    )
                )}
            </div>

            <p className='py-5 uppercase font-semibold text-orange'>{formattedDate(exp.workPeriod.start)} - {formattedDate(exp.workPeriod.end)}</p>

            <ul className='list-disc space-y-3 ml-5 text-lg'>
                {exp.summary.map((text, i) => <li key={i}>{text}</li>)}
            </ul>
        </div>
    </article>
  )
}
