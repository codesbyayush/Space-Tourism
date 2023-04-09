import React, { useState } from "react";
import Commander from "../assets/crew/image-douglas-hurley.png";

export default function Crew({ data }) {
  const [ind, setInd] = useState(0);

  const info = `Douglas Gerald Hurley is an American engineer, former Marine Corps
  pilot and former NASA astronaut. He launched into space for the third
  time as commander of Crew Dragon Demo-2.`;

  const chng = (e) => {
    setInd(e.target.dataset.nums);
  };

  return (
    <div
      className="lg:h-screen lg:w-screen lg:bg-crewBackgroundDesktop bg-cover text-white grid lg:grid-flow-col lg:grid-cols-2
    
    bg-crewBackgroundMobile pt-36 lg:pt-0 p-8 lg:p-0  h-screen"
    >
      <div className="lg:pl-28 lg:pt-96
       
       pt-8 text-center lg:text-left ">
        <div className="lg:fixed bottom-24 left-28 flex gap-6
          justify-center lg:justify-normal">
          <button
            onClick={chng}
            data-nums="0"
            className="aspect-square h-4 rounded-[50%] bg-gray-600 hover:bg-gray-400"
          ></button>
          <button
            onClick={chng}
            data-nums="1"
            className="aspect-square h-4 rounded-[50%] bg-gray-600 hover:bg-gray-400"
          ></button>
          <button
            onClick={chng}
            data-nums="2"
            className="aspect-square h-4 rounded-[50%] bg-gray-600 hover:bg-gray-400"
          ></button>
          <button
            onClick={chng}
            data-nums="3"
            className="aspect-square h-4 rounded-[50%] bg-gray-600 hover:bg-gray-400"
          ></button>
        </div>

        <h2 className="lg:text-h4 font-bellefair uppercase text-gray-400
            
            pt-6 lg:pt-0 text-[1.15rem]">
          {data !== undefined ? data[ind].role : "Commander"}
        </h2>

        <h1 className="lg:text-h3 font-bellefair uppercase lg:mb-8
        
            text-[1.75rem] mb-3">
          {data !== undefined ? data[ind].name : "Douglas hurley"}
        </h1>

        <p className="lg:w-96 tracking-[.08rem] text-shCol 
        text-[.98rem]">
          {data !== undefined ? data[ind].bio : info}
        </p>
      </div>
      <div
        className="self-end lg:justify-self-center 

            row-start-1 "
      >
        <img
          src={data !== undefined ? data[ind].images.png : Commander}
          className="h-[15rem] lg:h-auto mx-auto"
        />
        <hr/>
      </div>
    </div>
  );
}
