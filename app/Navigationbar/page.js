"use client";
import React from 'react'
import NavigationBar from './navigatebar'
import Menu from './menu';


const para =
              "Framer Motion 3D is a simple yet powerful animation library for React Three Fiber. It offers most of the same functionality as Framer Motion for\
 declarative 3D scenes. This guide will help you create animations with Motion 3D, but assumes you know the basics of both Framer Motion and React Three Fiber.";


function Home() {
  const [active, setActive] = React.useState(false);
  return (
    
    <div className='h-[100vh]  w-[100vw] bg-black '>
      <button onClick={()=>setActive(!active)} className='bg-purple-500'>click</button>
        {/* <NavigationBar/> */}
       <Menu active={active}/>
           
           
    </div>//#c9fd74;
  )
}

export default Home