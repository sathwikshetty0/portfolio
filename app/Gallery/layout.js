"use client";
import React from "react";
import { motion } from "framer-motion";
import NavigationBar from "../Navigationbar/navigatebar";
import Menu from "../Navigationbar/menu";
import Loader from "../Loading/Loader";
function Layout({ children }) {
  const [menu , setMenu] = React.useState(false)

  return (
    <div className="flex flex-row h-[100vh]">
      {/* Main content */}
      <div className=" lg:basis-[73vw] basis-[100vw]">
        <div className="lg:m-1 ">
        {<Menu active={menu} />}
          <button className="bg-[#c9fd74]
          lg:hidden block relative top-10 -right-[75%] z-[1000]
           text-black font-bold py-2 px-4 rounded-full" onClick={()=>{
            setMenu(!menu)
          }}>
            
            Menu
            
            </button>
          {/* <motion.h1
            className="text-7xl  2xl:text-9xl
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
            
          </motion.h1> */}
          {/* content */}
          {children}
        </div>
      </div>
      {/* side menu content */}
      <NavigationBar active={'Gallery'}/>
    </div>
  );
}

export default Layout;


// 
// 
//text bit small in mobile screen 
//