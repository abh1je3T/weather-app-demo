import React from "react";
import { ReactComponent as SunRise } from "../../assets/icons/fill/all/sunrise.svg";

function CenterWeatherInfo() {
  const currDateTime=new Date();
  console.log(currDateTime)
  return (
    <div className="w-3/4">
      <div className="flex flex-row justify-start items-center gap-2 h-20">
        <SunRise className="h-20 w-26" />
        <div className="flex h-full justify-center pt-5 flex-col">
          <h2>Mumbai, Maharashtra</h2>
          <p>
            <span>16 March,2023 / </span>
            <span>Saturday</span>
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-row p-[2em] gap-[2em] flex-wrap justify-evenly">
          <div className="w-36 h-48 p-[0.6rem] rounded-lg border2 text-start  bg-white  border-gray-200 bg-opacity-10" >
            <p className="text-[4em] text-left">23<span className="text-[0.175em]">°C / 73.4°F</span></p>
            <p>partly cloudy</p>
            <p>{`${currDateTime.getHours()} : ${currDateTime.getMinutes()} : ${currDateTime.getSeconds()}`}</p>
          </div>
          <div className="w-36  h-48 p-[0.6rem] rounded-lg border2 text-start  bg-white  border-gray-200 bg-opacity-10">
            <p className="text-[4em] text-left">23<span className="text-[0.175em]">°C / 73.4°F</span></p>
            <p>partly cloudy</p>
            <p>{`${currDateTime.getHours()+1} : ${currDateTime.getMinutes()} : ${currDateTime.getSeconds()}`}</p>
          </div>
          <div className="w-36  h-48 p-[0.6rem] rounded-lg border2 text-start  bg-white  border-gray-200 bg-opacity-10">
            <p className="text-[4em] text-left">23<span className="text-[0.175em]">°C / 73.4°F</span></p>
            <p>partly cloudy</p>
            <p>{`${currDateTime.getHours()+2} : ${currDateTime.getMinutes()} : ${currDateTime.getSeconds()}`}</p>
          </div>
          <div className="w-36  h-48 p-[0.6rem] rounded-lg border2 text-start  bg-white  border-gray-200 bg-opacity-10">
            <p className="text-[4em] text-left">23<span className="text-[0.175em]">°C / 73.4°F</span></p>
            <p>partly cloudy</p>
            <p>{`${currDateTime.getHours()+3} : ${currDateTime.getMinutes()} : ${currDateTime.getSeconds()}`}</p>
          </div>
          <div className="w-36  h-48 p-[0.6rem] rounded-lg border2 text-start  bg-white  border-gray-200 bg-opacity-10">
            <p className="text-[4em] text-left">23<span className="text-[0.175em]">°C / 73.4°F</span></p>
            <p>partly cloudy</p>
            <p>{`${currDateTime.getHours()+4} : ${currDateTime.getMinutes()} : ${currDateTime.getSeconds()}`}</p>
          </div>
          <div className="w-36  h-48 p-[0.6rem] rounded-lg border2 text-start  bg-white  border-gray-200 bg-opacity-10">
            <p className="text-[4em] text-left">23<span className="text-[0.175em]">°C / 73.4°F</span></p>
            <p>partly cloudy</p>
            <p>{`${currDateTime.getHours()+5} : ${currDateTime.getMinutes()} : ${currDateTime.getSeconds()}`}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CenterWeatherInfo;
