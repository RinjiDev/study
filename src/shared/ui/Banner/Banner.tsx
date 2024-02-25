import Image from 'next/image'
import React from 'react'
import image2 from '../../images/2.jpg'

export const Banner = () => {
  return (
    <div>
      <Image className='min-w-full relative max-h-screen absolute z-10' src={image2} alt='banner' />
      <div className='absolute bg-black z-20 opacity-45 top-0 left-0 rigth-0 rigth-0 min-h-full min-w-full' />
      <div className='absolute z-30 bottom-[15%] left-20 z-20 text-white flex flex-col'>
        <div className='flex gap-6 mb-4 items-center'>
          <span className='bg-red-400 py-[2px] px-[6px] rounded-xl'>18+</span>
          <span>Japan</span>
          <span>Studio</span>
        </div>
        <h1 className='text-white mb-3 font-bold text-[40px]'>
          Oshi no Ko
        </h1>
        <p className='max-w-[400px] text-[14px]'>Japanese manga series written by Aka Akasaka and illustrated by Mengo Yokoyari. Published in Shueisha's Weekly Young Jump magazine since April 2020, and as of November 2023, it has been published in thirteen tankōbon volumes</p>
      </div>
    </div>
  )
}
