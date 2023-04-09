import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-screen lg:bg-homeBackgroundDesktop bg-cover text-white
    
    bg-homeBackgroundMobile ">
      <div className="lg:h-96 lg:w-[28rem] lg:pt-[20rem] lg:pl-40 grid
      text-center lg:text-left pt-32">
        <p className="uppercase lg:text-h5 pl-1 lg:tracking-h5Space text-shCol
        text-[1.2rem] tracking-[0.07em]">So, you want to travel to</p>
        <h1 className="uppercase lg:text-h1 lg:pb-4 font-bellefair
        text-[5.5rem]">space</h1>
        <p className=" lg:text-sh2 lg:p-2 lg:tracking-sh2Space text-shCol
        px-6 text-[1.1rem] tracking-wider ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="lg:h-[21rem] lg:w-[21rem] aspect-square rounded-[50%] hover:bg-shCol 
      lg:fixed lg:top-[28.5rem] lg:left-[58.5rem] lg:p-24 hover:backdropbackdrop-blur hover:bg-opacity-20
      
      w-48 mx-auto py-4 lg:py-0 mt-16 lg:mt-0"
      >
      <button className="font-bellefair bg-white text-drkCol lg:h-[16rem]
      lg:w-[16rem] aspect-square rounded-[50%] 
      lg:fixed lg:top-[31rem] lg:left-[61rem] uppercase lg:text-h4 
        
      w-32 ml-8 mt-4 lg:ml-0 lg:mt-0
      ">
        explore
      </button>
      </div>
    </div>
  );
}
