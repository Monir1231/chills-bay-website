import React from 'react'
import { GalleryData } from '../../data/data'
import { Button } from '@heroui/react'
import Title from '../../common/Title'

function  MYNearby() {
  return (
    <section className=' mt-14 md:mt-24 bg-[#F5FAFF] py-5 md:py-10 '>
    <div className='lg:w-[85%] md:w-[90%] w-[90%] mx-auto'>
    <div className='flex items-center justify-between mb-5 lg:mb-8'>
    <Title className='text-[#26395C] lg:text-[32px] md:text-2xl text-xl font-bold'>Resturants nearby</Title>
    <h3 className='lg:text-[24px] md:text-[20px] text-lg text-[#0E8BFF] font-semibold'>See More</h3>
    </div>

    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-5 gap-4 space-y-8'>
     {GalleryData.map((item,index)=>(
        <div  key={index}>
        <img className='w-fit' src={item.img}/>
        <h2 className='lg:text-2xl text-xl text- font-bold pt-4 text-[#26395C]'>{item.title}</h2>
        <p className='text-sm text-[#26395C] py-2'>{item.des}</p>
        <Button className='mt-1' color='primary'>{item.button}</Button>

        </div>
     ))}
    </div>
    </div>

    </section>
  )
}

export default MYNearby