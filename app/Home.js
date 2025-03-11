"use client";
import { useMotionValue ,useScroll} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import About from "./About/page";
import Link from "next/link";
import ActivePage from "./Navigationbar/activePage";


export default  function Home() {
   
 
  // const [red,setRed] =useState(0);
  // let [green,setGreen] =useState(0);
  // let [blue, setBlue] = useState(0);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
 
  useEffect(function () {
    const { innerHeight, innerWidth } = window;
    setHeight(innerHeight);
    setWidth(innerWidth);


  }, []);

  return (
    <div className="h-[100vh] w-[100vw]  text-white ">
      <div>{/* 3d model */}</div>
      <div className="flex flex-row h-[65vh] w-[100vw]  lg:bg-zinc-500 lg:hidden ">
        <FrontImage />
        <JapName />
      </div>
      <div className="lg:hidden">
        <Intro />
      </div>
      <div className="lg:hidden">
        <Scroll />
      </div>
      {/* lg screen  */}
      <div className="lg:flex flex-row h-[100vh] w-[100vw]  hidden ">
        <div>
          <div>
            <Intro innerHeight={height} />
          </div>
          <div>
            <Scroll />
          </div>
        </div>
        <div className="basis-1/2  flex lg:flex-row">
          <FrontImage />
          <JapName />
        </div>
      </div>

    
    </div>

  );
}

function FrontImage() {
  return (
    <div className="basis-5/6   lg:basis-5/6">
      <div className="absolute z-10 h-[80%] w-[80%] ml-10  lg:h-[50vh] lg:w-[30vw] ">
        {/* <img src={"./frontImage.png"} height={100} className="lg:hidden"/> */}
      </div>
      <div className=" h-[90%] w-[30%] ml-40 opacity-30 z-0 lg:hidden"></div>
    </div>
  );
}

function JapName() {
    const japName ="さんジャん";
  return (
    <div className="basis-2/6  ">
      <div className="bg-slate-300/30 h-[40%] w-[40%] lg:h-[45vh] lg:w-[5vw] lg:ml-20 text-white  flex flex-col lg:pt-10">
            {japName.split("").map((letter,index)=>{
                return <span key={index} className="text-4xl lg:text-6xl">{letter}</span>
            })}
      </div>
    </div>
  );
}

function Intro({ innerHeight }) {
  return (
    <div
      className={`mx-8 flex flex-col ml-[8vw]`}
      style={{ marginTop: `${innerHeight / 2 - 100}px` }}
    >
      <div className="font-bold text-2xl">Hi, im</div>
      <div className="font-bold text-[40px] lg:text-7xl">Sathwik Shetty N </div>
      <div className="lg:mt-3">
        Engineering Stud, discovering world of Computer Sciences.
      </div>
    </div>
  );
}

function Scroll() {
  return (
    <div className="flex flex-col   mx-20 h-[15vh] mt-2 gap-5 lg:flex-row lg:mt-36 lg:gap-40 pb-10 lg:mx-0">
      <div className=" text-center basis-1/2">
      <Link href="/Contact">
      
      Get In touch
      </Link>
      
      </div>
      <center><Link href="/About">
        <div className="w-[8em] ">Know Me?, <ActivePage title={"Click Here"}></ActivePage></div>
      </Link>
      </center>
  </div>
  );
}

