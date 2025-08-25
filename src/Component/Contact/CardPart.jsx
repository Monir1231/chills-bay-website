import React from 'react'

function CardPart() {
    const CardItem =[
        {
            image:"help.png",
            title:"Become an Influencer",
            des:"Join a company that’s passionate about design and technology",
            email:"chills@chillsbay.com"
        },
        {
            image:"Influencer.png",
            title:"Need Help?",
            des:"Join a company that’s passionate about design and technology",
            email:"chills@chillsbay.com"
        },
        {
            image:"refund.png",
            title:"Become an Influencer",
            des:"Join a company that’s passionate about design and technology",
            email:"chills@chillsbay.com"
        },
    ]
  return (
    <div className='w-[80%]  mx-auto mt-24'> 
    <div className='flex flex-col lg:flex-row gap-6 mx-auto'>
        {CardItem.map((item,index)=>(
        <div key={index} className=' text-center mx-auto'>
         <img className='lg:w-[100px] w-[70px] mx-auto ' src={item.image}/>
         <h2 className='mt-4 mb-2 text-[22px] font-bold text-[#26395C] '>{item.title}</h2>
         <p className='text-base text-[#656B89] max-w-[277px]  '>{item.des}</p>
         <p className='mt-3.5 text-base text-[#0E8BFF]'>{item.email}</p>
        </div>
    ))}
    </div>

    </div>
  )
}

export default CardPart