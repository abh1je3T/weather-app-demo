import React, { useEffect, useState } from 'react'
import MainCard from '../MainCard'
import TopNavigation from '../TopNavigation'
import CenterWeatherInfo from '../CenterWeatherInfo'
import { fetchUserLocationData } from '../../api/apiCall'
import { useMainContext } from '../../Context/mainContext'

function Home() {
  const [getLocationData, setLocationData] = useState({})

  const {
    setSelectedCityData,
  } = useMainContext();
  async function userLocationFunction(){
    const myData=await fetchUserLocationData();
    setLocationData(myData);
  }

useEffect(() => {
  userLocationFunction()
}, [])


useEffect(() => {
 
 const {city,region,latitude,longitude}=getLocationData;
 const formattedLocationData={
  name:city,
  admin1:region,
  ...getLocationData
 };

 latitude&&longitude&&setSelectedCityData(formattedLocationData);
}, [getLocationData])



  return (
    <div className='home-container home-container-day-background'>
      <TopNavigation currGeoLocationData={getLocationData}/>
      <div className='ml-10 top-28 absolute flex flex-row w-3/4 gap-8 h-[54vh] border1'>
      <MainCard />
      <CenterWeatherInfo/>
      </div>
    </div>
  )
}

export default Home;