import React, {useState} from "react";
import technology from "../assets/technology/image-launch-vehicle-portrait.jpg";

export default function Technology({data}) {

  const [ ind , setInd ]  = useState(0);

  const info = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used
  to carry a payload from Earth's surface to space, usually to Earth
  orbit or beyond. Our WEB-X carrier rocket is the most powerful in
  operation. Standing 150 metres tall, it's quite an awe-inspiring sight
  on the launch pad!`

  const chng = (e) => {
    setInd(e.target.dataset.nums)
  }

  return (
    <div className="w-screen h-screen lg:bg-techBackgroundDesktop text-shCol
    
    bg-techBackgroundMobile bg:cover">

<img src={data !== undefined ? data[ind].images.landscape : technology} alt="" className="pt-40 pb:4 lg:hidden overflow-hidden w-full"/>


      <div className="lg:fixed grid lg:mt-96 lg:ml-20 text-white
      
      lg:grid-flow-row grid-flow-col px-24 py-8 lg:px-0 lg:py-0 gap-4 lg:gap-0">
        <button onClick={chng} data-nums = "0" className="aspect-square lg:h-20 rounded-[50%] lg:m-4 border-gray-700 border-[1px] hover:border-gray-300
        
        h-12">
          1
        </button>
        <button onClick={chng} data-nums = "1" className="aspect-square lg:h-20 rounded-[50%] lg:m-4 border-gray-700 border-[1px] hover:border-gray-300
        
        h-12">
          2
        </button>
        <button onClick={chng} data-nums = "2" className="aspect-square lg:h-20 rounded-[50%] lg:m-4 border-gray-700 border-[1px] hover:border-gray-300
        
        h-12">
          3
        </button>
      </div>

      <div className="lg:mt-96 lg:ml-[20.5rem] lg:fixed lg:h-80 lg:w-[29rem]
        
        text-center lg:text-left">

        <p className="lg:text-sh2 uppercase lg:pt-2 
        
          text-[.9rem] tracking-widest lg:tracking-normal">The terminology...</p>

        <h1 className="whitespace-nowrap lg:text-h3 font-bellefair uppercase lg:pb-2 text-white
        
        text-[1.7rem]"> 
        {data !== undefined ? data[ind].name : "Launch vehicle"}
         </h1>

        <p className="lg:tracking-[0.08rem] lg:p-2
          
          tracking-[.11rem] px-6">
          {data !== undefined ? data[ind].description : info}
        </p>
      </div>

      <img src={data !== undefined ? data[ind].images.portrait : technology} alt="" className="fixed bottom-16 right-0 hidden lg:block"/>
      
    </div>
  );
}
