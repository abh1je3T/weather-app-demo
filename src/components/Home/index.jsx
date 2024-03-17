import React from 'react'
import MainCard from '../MainCard'
import TopNavigation from '../TopNavigation'
import CenterWeatherInfo from '../CenterWeatherInfo'

function Home() {
  return (
    <div className='home-container home-container-day-background'>
      <TopNavigation/>
      <div className='ml-10 top-28 absolute flex flex-row w-3/4 gap-8 h-[54vh] border1'>
      <MainCard />
      <CenterWeatherInfo/>
      </div>
    </div>
  )
}

export default Home