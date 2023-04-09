import React, { useState } from "react";
import moon from "../assets/destination/image-moon.webp";


export default function Destination({data}) {

  const [ ind , setInd ]  = useState(0);

  const chng = (e) => {
    setInd(e.target.dataset.nums)
  }
  const emer = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain 
                perspective and come back refreshed. While you’re there, take in some history by visiting 
                the Luna 2 and Apollo 11 landing sites. `

  return (
    <div className="grid lg:grid-flow-col lg:grid-cols-2 w-screen lg:h-screen lg:bg-destBackgroundDesktop lg:gap-24 text-shCol
    
     grid-flow-row bg-destBackgroundMobile bg-cover h-full pt-36 lg:pt-0">

      <div className="lg:justify-self-end lg:self-end lg:mb-28 aspect-square lg:h-[26rem]
      
      justify-self-center h-56 ">

        <img src={data[ind] !== undefined ? data[ind].images.webp : "src/assets/destination/image-moon.webp"} alt="" />

      </div>

      <div className=" lg:ml-20 lg:pt-80 lg:w-96
      
      p-8 text-center lg:p-0 lg:text-left">

        <div className="flex lg:gap-10 lg:text-h5
        
         gap-8 justify-center text-[1.1rem] lg:justify-normal">
          <button onClick={chng} data-nums = "0" className="uppercase">Moon</button>
          <button onClick={chng} data-nums = "1" 
          className="uppercase">Mars</button>
          <button onClick={chng} data-nums = "2" className="uppercase">Europa</button>
          <button onClick={chng} data-nums = "3" className="uppercase">Titan</button>
        </div>
        <h1 className="lg:text-h2 uppercase font-bellefair lg:pt-8 text-white
        
          text-[3.8rem] pt-4">
        {data[ind] !== undefined ? data[ind].name : "moon"}
        </h1>
        <div className="tracking-[.08rem]">
          {data[ind] !== undefined ? data[ind].description : emer}
        </div>

        <hr className="lg:mb-8 lg:mt-16
        
        mb-8 mt-8"/>
        <div className="grid lg:grid-flow-col lg:columns-2 w-full
        
        grid-flow-row gap-6 lg:gap-0">
          <div>
            <h3 className="lg:text-sh2 uppercase
             text-[1.1rem]">Avg. distance</h3>
            <p className="lg:text-sh1 text-white uppercase 
             text-[1.8rem] font-bellefair">
            {data[ind] !== undefined ? data[ind].distance : "384,400 km"}
            </p>
          </div>
          <div>
            <h3 className="lg:text-sh2 uppercase
             text-[1.1rem]">Est. travel time</h3>
            <p className="lg:text-sh1 text-white uppercase 
             text-[1.8rem] font-bellefair">
            {data[ind] !== undefined ? data[ind].travel : "3 days"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
