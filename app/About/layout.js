"use client";

import React from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../Navigationbar/navigatebar';
import Menu from "../Navigationbar/menu";


function Layout({children}) {
  const [menu , setMenu] = React.useState(false)

  return (
    <div className="flex flex-row h-[100vh] w-[100vw]">
    {/* Main content */}
    <div className=" lg:basis-[75vw] basis-[100vw]">
      <div className="lg:m-10">
      {<Menu active={menu} />}
          <button className="bg-[#c9fd74]
          lg:hidden block relative top-10 -right-[75%] z-[1000]
           text-black font-bold py-2 px-4 rounded-full" onClick={()=>{
            setMenu(!menu)
          }}>
            
            Menu
            
            </button>
        <motion.h1
          className="text-7xl m-5 2xl:text-9xl
         "
        
        >
          About
        </motion.h1>
        {/* content */}
        {children}


      </div>
    </div>
    {/* side menu content */}
    <NavigationBar active={'About'}/>
   </div>
  )
}

export default Layout

// cut navigation menu from all layout and make a new nav component\
// and import it in all layout use userouter hook to to know the current page 
//text bit small in mobile screen 
//and layout  margin left should be reduced in mobile screen