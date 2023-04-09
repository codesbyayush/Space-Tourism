import React, { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburger } from "../assets/shared/icon-hamburger.svg";
import {ReactComponent as Close } from "../assets/shared/icon-close.svg";

export default function Navbar() {
  const [text, setText] = useState("");
  const [open, toggle] = useState(true);

  // Fix the shifting of state when switching to desktop mode.

  const toggl = ()=>{
    toggle(!open);
  }

  const home = () => {
    setText("");
  };
  const dest = () => {
    setText("01 Pick your destination");
  };
  const crew = () => {
    setText("02 Meet your crew");
  };
  const tech = () => {
    setText("03 Space launch 101");
  };

  return (
    <div className="flex flex-row justify-between lg:w-[1385px] lg:h-[96px] items-center lg:fixed lg:left-[55px] lg:top-[40px]
    
    top-0 pt-6 pl-6 lg:pl-0 lg:pt-0 absolute">

<div className="lg:fixed lg:top-[13.5rem] lg:left-[6.9rem] text-white lg:text-h5 lg:tracking-h5Space uppercase lg:text-left
      
       absolute w-max top-24 text-center text-[1.3rem] tracking-[.13em]
       left-16">
        {text}
      </div>

      <img src={logo} className="h-[48px] aspect-square" />

      <div className="h-[1px] w-[473px] relative left-[64px] bg-slate-600 z-20 
      
      hidden lg:block"></div>

    { !open ? <Hamburger className="fixed right-6 lg:hidden" onClick ={toggl}
     />:
       null}
      { open ?
      <div
        className="flex lg:justify-between lg:w-[830px] lg:h-full bg-white bg-opacity-[4%] text-white lg:backdrop-blur
        lg:px-[147px] lg:items-center 
                      
        flex-col lg:flex-row fixed lg:static top-0 right-0 
        h-full w-4/6 p-8 lg:p-0 pt-32 lg:pt-0 backdrop-blur-[40px] gap-8 lg:gap-0 text-[1.2rem]"
      >
        <Close className="absolute top-10 right-6 lg:hidden" onClick ={toggl}/>
        <Link to="/">
          <button onClick={home} className="tracking-navSpace uppercase">
            <span>00 </span> Home
          </button>
        </Link>
        <Link to="/destination">
          <button onClick={dest} className="tracking-navSpace uppercase">
            <span>01 </span> Destination
          </button>
        </Link>
        <Link to="/crew">
          <button onClick={crew} className="tracking-navSpace uppercase">
            <span>02 </span> Crew
          </button>
        </Link>
        <Link to="/technology">
          <button onClick={tech} className="tracking-navSpace uppercase">
            <span>03 </span> Technology
          </button>
        </Link>
      </div> : null}


    </div>
  );
}
