import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience, Project } from '../helpers/types'
import { GetServerSideProps } from 'next'

type Props = {
    projects: Project[]
}

export const Projects = ({ projects }: Props) => {
    return (
        <div className='h-screen relative overflow-hidden flex flex-col text-left md:flex-row
            max-w-full justify-evenly mx-auto items-center z-0'>
            <h1 className='sectionTitle'>Projects</h1>

            <div className='relative w-full flex overflow-x-scroll
                scrollbar scrollbar-track-blue scrollbar-thumb-orange
                overflow-y-hidden snap-x snap-mandatory z-20'
            >
                {projects.map((p, i) => (
                    <div key={i} className='w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-44'>
                        <motion.div
                            className='relative h-48 w-[100%]'
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={'/projects.png'}
                                layout='fill'
                                objectFit='contain'
                                alt={'projects'}
                            />
                        </motion.div>

                        <div className='flex gap-3'>
                            {p.technologies.map(t => (
                                    <div key={t} className='relative w-10 h-10'>
                                        <Image
                                            src={`/${t}.png`}
                                            layout='fill'
                                            objectFit='contain'
                                            alt={t}
                                        />
                                    </div>
                                )
                            )}
                        </div>

                        <div className='space-y-10 px-0 md:px-10 max-w-4xl'>
                            <h4 className='text-4xl font-semibold text-center text-orange'>
                                <span className='underline text-cream decoration-cream/50'>
                                    Project {i + 1} of {projects.length}:
                                </span>
                                {" "}{p.projectName}
                            </h4>

                            <p className='text-lg text-center md:text-left text-cream'>{p.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-blue/40 left-0 h-[500px] -skew-y-12' />
        </div>
    )
}
