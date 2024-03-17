import React from 'react';
import {ReactComponent as PartlyCloudyDay } from "../../assets/icons/fill/all/partly-cloudy-day.svg"
import InfoCard from '../InfoCard';


function MainCard() {
  return (
    <div className={'main-card-container h-full border1 flex-column-justify-space-evenly bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40'}>
        <h1 className='font-bold text-2xl'>Mostly Cloudy Today</h1>
        <div className='card-main-icon justify-center flex'>
            <PartlyCloudyDay/>
        </div>
        <div className='main-info-container'>
            <InfoCard Icon={PartlyCloudyDay} InfoTitle={"SSW"} InfoDetail={"18mph"}/>
            <InfoCard Icon={PartlyCloudyDay} InfoTitle={"SSW"} InfoDetail={"18mph"}/>
            <InfoCard Icon={PartlyCloudyDay} InfoTitle={"SSW"} InfoDetail={"18mph"}/>
            <InfoCard Icon={PartlyCloudyDay} InfoTitle={"SSW"} InfoDetail={"18mph"}/>
        </div>
    </div>
  )
}

export default MainCard