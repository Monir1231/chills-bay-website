import React from 'react'

import Head from '../../Component/common/head'

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
    <div className=' container lg:w-[85%] w-[90%]  mx-auto mb-16'>
   <div className=' hidden lg:flex'>
    <h4 className='  text-2xl font-bold text-[#26395C] mt-16 mb-5'>See How people are chilling on <span className='text-[#0E8BFF]'> Chillsbay</span></h4>
   </div>

     <div className=' lg:hidden flex'>
    <h4 className='  text-2xl font-bold text-[#26395C] mt-10 mb-5'>See How people are chilling <br/> on <span className='text-[#0E8BFF]'> Chillsbay</span></h4>
   </div>


     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 '>
       {peopleimgData.map((item,index)=>(
        <div key={index}>
            <img className='w-full h-[180px]' src={item.img}/>
        </div>
       ))}
     </div>
    </div>
  )
}

export default Allpeople