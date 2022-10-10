import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

export const ContactMe = () => {
  return (
    <div className='h-screen relative flex flex-col text-center
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h1 className='sectionTitle'>Contact</h1>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center text-cream'>
                Everybody call me Aman, but you can call me {" "}
                <span className='text-orange'>anytime{`))`}</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-orange w-7 h-7' />
                    <p className='text-2xl text-cream'>+995599918884</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-orange w-7 h-7' />
                    <p className='text-2xl text-cream'>amanbakiev99@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-orange w-7 h-7' />
                    <p className='text-2xl text-cream'>Tbilisi, Georgia</p>
                </div>
            </div>
        </div>
    </div>
  )
}
