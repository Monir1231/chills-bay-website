import React from 'react'
import Hero from './Hero'
import ClubBar from './ClubBar'
import MyCarousel from '../Home/Carousel'
import MyMap from '../Drinkpage/Map'

function ClubPage() {
  return (
    <>
        <Hero/>
        <ClubBar title="Popular Night Clubs"/>
        <MyCarousel isDark/>
        <ClubBar title={"Bars and Night clubs near you"}/>
      <MyMap/>
    </>
  )
}

export default ClubPage