import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCircles } from './BackgroundCircles';

export const Hero = () => {
    const [text] = useTypewriter({
        words: ['Coding is my warmup', 'Debugging is my cardio'],
        loop: true,
    })

    return (
        <div className='h-screen pt-28 flex flex-col items-center justify-center space-y-8 overflow-hidden'>
            <BackgroundCircles />
            <div className='z-10'>
                <div className='text-center'>
                    <Image
                        src={'/curry.jpg'}
                        alt='avatar image'
                        width={128}
                        height={128}
                        className='rounded-full object-cover'
                    />
                </div>
                <div>
                    <h2 className='uppercase text-sm tracking-[13px] text-center'>
                        Software engineer
                    </h2>
                    <h1 className='mb-6 mt-3 text-center text-3xl font-semibold tracking-wider'>
                        <span>{text}</span>
                        <Cursor cursorColor='yellow' />
                    </h1>
                </div>

                <div className='flex justify-between gap-3'>
                    <Link href={'#about'}>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href={'#experience'}>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href={'#skills'}>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href={'#projects'}>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
