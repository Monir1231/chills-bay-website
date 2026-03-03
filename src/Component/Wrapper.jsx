import React from 'react'
import MyNavbar from './Navbar'
import Footer from './Footer'
import { ThemeColor } from '../lib/utils'
// import { ThemeColor } from '../lib/utils'

const Wrapper = ({children,isDark}) => {
  return (
   <div className={ThemeColor(isDark)}>
      <MyNavbar isDark={isDark} />
      {children}
      <Footer isDark={isDark}/>
   </div>
  )
}

export default Wrapper