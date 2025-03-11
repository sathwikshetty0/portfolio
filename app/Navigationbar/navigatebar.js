"use client";
import {motion} from 'framer-motion'
import Zoop from '../Components/AnimatedText/zoop';
import React from 'react'
import Link from 'next/link';

function NavigationBar({active}) {
  const handleClick = () => {
    // Clear sessionStorage when the link is clicked
    sessionStorage.clear();
  };
  return (
    <div
        className=" 
           basis-[25vw] hidden
          lg:flex flex-col justify-center 
          text-4xl gap-6 2xl:text-6xl          "
      >
        {active==='Home' ?<ActivePage title={"Home"}/>:  <div className="ml-[35%] cursor-pointer" onClick={handleClick}>
          <Link href="/Home">
          
          <Zoop >
          Home
          </Zoop>
          
          </Link>
          
          </div>}
        {active==='About' ?<ActivePage title={"About"}/>:  <div className="ml-[35%] cursor-pointer">
        <Link href="/About">
        <Zoop  >
          About
          </Zoop>
        </Link>
          </div>}
        {active==='Project' ?<ActivePage title={"Project"}/>:  <div className="ml-[35%] cursor-pointer">
          <Link href="/Project">
          <Zoop  >
          Project
            </Zoop>
</Link>
            
            </div>}
        {active==='Gallery' ?<ActivePage title={"Gallery"}/>:  <div className="ml-[35%] cursor-pointer">
<Link href="/Gallery">
        <Zoop  >

          Gallery
        </Zoop>
</Link>
          
          </div>}
        {active==='Contact' ?<ActivePage title={"GetinTouch"}/>:  <div className="ml-[35%] cursor-pointer">

<Link href="/Contact">
        <Zoop  >

          Get in Touch
        </Zoop>
</Link>
          
          </div>}      </div>
  )
}

export default NavigationBar

const ActivePage=({title})=>
{
  return(
    <motion.div
         initial={{
          background: "linear-gradient(90deg, #60a5fa , #9333ea 50%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        animate={{
          background: "linear-gradient(90deg, #eab308,#06b6d4  20%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        whileHover={{
          background: 'white',
                    
                    transition: { duration: 1, ease: 'easeInOut' }
        }}
         className="ml-[35%] cursor-pointer">
          

          {title}
      
          </motion.div>

  );
}