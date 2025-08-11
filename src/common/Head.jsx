import { cn } from '@heroui/react'
import React from 'react'

function Head({children,className}) {
  return (
    <h2 className={cn('xl:text-[42px] xl:max-w-[700px] lg:text-[38px]  md:text-[35px] md:max-w-[550px] text-[24px] max-w-[350px] font-bold text-[#26395C] ',className)}>{children}</h2>
  )
}

export default Head