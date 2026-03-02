import React from 'react'

import Head from '../../common/head'

const peopleimgData =[
    {
        img:"g1.png"
    },
     {
        img:"g2.png"
    },
     {
        img:"g3.png"
    },
     {
        img:"g4.png"
    },
     {
        img:"g5.png"
    },
     {
        img:"g6.png"
    },
]

function Allpeople() {
  return (
    <div className='md:w-[80%] w-[90%] mx-auto'>
   <h4 className='lg:text-2xl md:text-[20px] text-base font-bold text-[#26395C] mt-20 mb-5'>See How people are chilling on <span className='text-[#0E8BFF]'>Chillsbay</span></h4>
     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
       {peopleimgData.map((item,index)=>(
        <div key={index}>
            <img className='w-full mb-6 h-[180px]' src={item.img}/>
        </div>
       ))}
     </div>
    </div>
  )
}

export default Allpeople