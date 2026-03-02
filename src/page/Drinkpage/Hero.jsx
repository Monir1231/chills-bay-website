import React from 'react'
import { Button } from '@heroui/react'

export const Hero = () => {
  return (
    <section className='bg-[url("eat-and-drink-hero-bg.png")] bg-no-repeat bg-center bg-cover py-20 md:py-28  text-center lg:text-start'>

    <div className='container lg:w-[85%] md:w-[90%] w-[85%]  mx-auto  mb-6 '>
        <div className='bg-white/80 w-fit text-[#26395C]  rounded-md p-4 md:p-6 ' >
            <h1 className='lg:text-[42px] md:text-[30px] text-[25px] max-w-[600px] font-bold'>Our top pick for the week!</h1>
            <h2 className='lg:text-[32px] md:text-[24px] text-lg max-w-[600px] font-semibold md:mt-3.5 mt-3'>Nok by Alara</h2>
            <p className='lg:text-[20px] md:text-base text-sm max-w-[361px] mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>

            <div className='flex justify-end'>
             <Button color='primary' className='mt-6'>Reserve Now</Button>
            </div>
        </div>
    </div>

    </section>
  )
}
 