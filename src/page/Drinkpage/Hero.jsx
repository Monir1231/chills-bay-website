import React from 'react'
import { Button } from '@heroui/react'

export const Hero = () => {
  return (
    <section className='bg-[url("eat-and-drink-hero-bg.png")] bg-no-repeat bg-center bg-cover h-[441px] md:h-[555px]  text-center lg:text-start'>

    <div className='lg:w-[85%] md:w-[90%] w-[85%] pt-8 lg:pt-16  mx-auto   '>
        <div className='bg-white/90 w-fit text-[#26395C]  rounded-md p-4 md:p-6 ' >
            <h1 className='lg:text-[42px] md:text-[30px] text-[25px] max-w-[600px] font-bold'>Our top pick for the week!</h1>
            <h2 className='lg:text-[32px] md:text-[24px] text-lg max-w-[600px] text-start font-semibold md:mt-2 mt-3'>Nok by Alara</h2>
            <p className='hidden lg:flex lg:text-[20px] md:text-base text-sm max-w-[361px] mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>

            <div className=' flex items-center justify-end lg:justify-start '>
             <Button color='primary' className='mt-6 text-sm '>Reserve Now</Button>
            </div>
        </div>
    </div>

    </section>
  )
}
 