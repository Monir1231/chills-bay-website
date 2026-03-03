import React from 'react'
import Title from '../../Component/Title'
import { Button } from '@heroui/react'
import { ClubALlData } from '../../data/data'
import { MdOutlineToday } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const ClubBar = ({title}) => {
  return (
    <div className="lg:mt-[50px] mt-[40px]  container md:w-[85%] w-[95%] mx-auto">
        <div className='flex items-center justify-between mb-5 lg:mb-8'>
    <Title className={' text-white text-lg'}>{title}</Title>
    <h3 className='lg:text-[24px] md:text-[20px] text-[13px] text-white font-semibold hover:cursor-pointer'>See More</h3>
    </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-5 gap-4 space-y-8'>
     {ClubALlData.map((item,index)=>(
        <div  key={index}>
      
          <div className=' relative'>
              <img className='  lg:w-[295px] lg:h-[270px] h-[144px] w-full object-cover rounded-2xl '  src={item.img}/> 
               <h4 className=' absolute top-3 right-3 text-[#26395C] lg:py-2 lg:px-3 py-1.5 px-2 rounded-md bg-white  font-semibold lg:font-bold text-[13px] '>{item.month}</h4>
          </div>
          
        
    
        <h2 className='lg:text-xl text-sm text- font-bold pt-2 text-white'>{item.title}</h2>
        <p className='lg:text-sm text-[12px] text-white py-2'>{item.des}</p>
        <div className=' flex items-center gap-3'>
            <div className=' flex items-center gap-1'>
               <MdOutlineToday />
                <p className=' text-[10px] text-white font-normal'>{item.day}</p>
            </div>

             <div className=' flex items-center gap-1'>
              <IoMdTime />
                <p className=' text-[10px] text-white font-normal'>{item.time}</p>
            </div>
        </div>
        <Button className='mt-3 text-[12px] lg:font-bold font-semibold lg:px-7 px-5' color='primary'>Book Now</Button>

        </div>
     ))}
    </div>

    </div>
  )
}

export default ClubBar