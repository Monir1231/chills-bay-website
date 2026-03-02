import React from 'react'
import { GalleryData } from '../../data/data'
import { Button } from '@heroui/react'

function Gallery() {
  return (
    <section className=' mt-14 md:mt-24 bg-[#F5FAFF] py-5 md:py-10 '>
    <div className='lg:w-[85%] md:w-[90%] w-[92%] mx-auto'>
    <div className='flex justify-end'>
    <h3 className='lg:text-[24px] md:text-[20px] text-lg text-[#0E8BFF] font-semibold mb-5 '>See More</h3>
    </div>

    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-5 gap-9'>
     {GalleryData.map((item,index)=>(
        <div  key={index}>
        <img className='w-fit' src={item.img}/>
        <h2 className='text-2xl font-bold pt-4 text-[#26395C]'>{item.title}</h2>
        <p className='text-sm text-[#26395C] py-2.5'>{item.des}</p>
        <Button className='mt-1' color='primary'>{item.button}</Button>

        </div>
     ))}
    </div>
    </div>

    </section>
  )
}

export default Gallery