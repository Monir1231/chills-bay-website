import { cn } from '@heroui/react'
import React from 'react'

function HeadALl({children,className}) {
  return (
    <h2 className={cn('  lg:text-[42px]  md:text-[35px] text-[24px]  font-bold text-[#26395C] ',className)}>{children}</h2>
  )
}

export default HeadALl