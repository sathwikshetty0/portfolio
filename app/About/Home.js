"use client";
import React, { use, useEffect } from "react";
import { AboutMe } from "../utility/utils";
import { motion } from "framer-motion";
import TextReveal from "./textReveal";
import Card from "../Components/Card/card";
import Zoop from "../Components/AnimatedText/zoop";

function Home() {
  return (
    <div className="">
      <LayoutLoad />
    </div>
  );
}

export default Home;

function LayoutLoad() {
  return (
    <div>
      <div className="hidden lg:block">
        <LayoutLoadLg />
      </div>
      <div className="block lg:hidden ">
        <LayoutLoadSM />
      </div>
    </div>
  );
}

const LayoutLoadLg = () => {
  const list = [1, 3, 4, 9, 8, 6, 20];
  const description = AboutMe.Description;

  return (
    <div className="max-h-full flex flex-row h-[100%] gap-3 lg:mt-32 lg:ml-5">
      <div className="basis-2/3 flex flex-col gap-10  ">
        {/* content  */}
        <div className=" basis-1/3  gap-2 text-3xl text-neutral-300">
          <TextReveal>{description}</TextReveal>
        </div>
        <div className=" basis-1/3">
          {/* cards */}
          <CardLayout />
        </div>
      </div>
      <div className="basis-1/3 -mt-10  ba">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          src="images/profile.JPG"
        />
      </div>
    </div>
  );
};

const LayoutLoadSM = () => {
  const list = [1, 3, 4, 9, 20];
  const description = AboutMe.Description;
  return (
    <div className="flex  flex-col m-5  gap-5 mt-16">
       <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          src="images/profile.JPG" className="scale-75 -mt-20  rounded-full"
        />
      <div className=" basis-1/3 flex flex-col gap-2">
        {/* para About me */}
        <div className=" basis-1/3  gap-2 text-3xl text-neutral-300">
          <TextReveal>{description}</TextReveal>
        </div>
      </div>
      <CardLayoutSM />
    </div>
  );
};

const CardLayoutSM = () => {
  return (
    <a href="https://drive.google.com/file/d/16GDdB5DtGbXrTwKZPIuqiDbPACuYC79R/view?usp=drive_link">
      
          <div className="bg-[#c9fd74] cursor-pointer text-black font-bold backdrop-blur-md h-[7vh] w-[30vw]  text-xl text-center p-5 rounded-full">
            <Zoop>Resume</Zoop>
          </div>
      
    </a>
  );
};

const CardLayout = ({ height, width }) => {
  return (
    <div className="flex flex-row  gap-1 max-h-full">
      <div className=" flex flex-col gap-1 h-full">
        {/* sub cards upon each other */}

        <a href="https://drive.google.com/file/d/16GDdB5DtGbXrTwKZPIuqiDbPACuYC79R/view?usp=drive_link">
          <div
            className="bg-[#c9fd74]  h-[8vh] w-[10vw]
                    text-2xl text-center p-5  rounded-full text-black"
          >
            <Zoop>Resume</Zoop>
          </div>
        </a>
      </div>
      <div className=" ">{/* large card redirecting project page */}</div>
    </div>
  );
};
