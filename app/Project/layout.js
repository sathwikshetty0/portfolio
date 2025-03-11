"use client";
import React from "react";
import { motion } from "framer-motion";
import NavigationBar from "../Navigationbar/navigatebar";
import Menu from "../Navigationbar/menu";

function Layout({ children }) {
  const [menu , setMenu] = React.useState(false)
  return (
    <div className="flex flex-row h-[100vh]">
      {/* Main content */}
      <div className=" lg:basis-[75vw] basis-[100vw]">
        <div className="m-10">
    {<Menu active={menu} />}
          <button className="bg-[#c9fd74]
          lg:hidden block relative top-0 -right-[80%] z-[1000]
           text-black font-bold py-2 px-4 rounded-full" onClick={()=>{
            setMenu(!menu)
          }}>
            
            Menu
            
            </button>
          <motion.h1
            className="text-7xl m-5 2xl:text-9xl
           "
            // initial={{
            //   background: "linear-gradient(90deg, #60a5fa , #9333ea 10%)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            // }}
            // animate={{
            //   background: "linear-gradient(90deg, #eab308,#06b6d4  20%)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            // }}
            // transition={{
            //   duration: 2,
            //   ease: "easeInOut",
            //   repeat: Infinity,
            //   repeatType: "reverse",
            // }}
            // style={{
            //   fontSize: "4rem",
            //   fontWeight: "bold",
            // }}
          >
            Project
          </motion.h1>
          {/* content */}
          {children}
        </div>
      </div>
      {/* side menu content */}
      <NavigationBar active={'Project'}/>
    </div>
  );
}

export default Layout;

// cut navigation menu from all layout and make a new nav component\
// and import it in all layout use userouter hook to to know the current page 
//text bit small in mobile screen 
//and layout  margin left should be reduced in mobile screen