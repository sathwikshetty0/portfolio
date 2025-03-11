"use client";
import React, { useEffect, useState } from 'react'
import { useScroll , motion,AnimatePresence } from 'framer-motion';


function Textcomp({text}) {
  const [animatetext , setAnimateText]= useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setAnimateText(true);
      
    }, 100);
  },[])

  return (
    <div className='h-[100vh] '>
        <motion.span className=' flex h-[20vh] justify-center items-center text-8xl relative 
         bg-white font-extrabold space-x-1 
          font-sans
        ' style={{zIndex:-1}}>
            { animatetext===false||1 &&
            text.split("").map((child , idx)=>{
               return(
               <motion.span key={idx} 
               initial={{
                translateY:`${140}px`,
               }}
               animate={{translateY:`${30}px` ,transition:{
                ease:[0.6,0.01,-0.05,0.95],
                duration:0.45, delay:idx/12 
               } }}

              
              //  exit={{translateX:"100px"}}
               >
                {child}
               </motion.span>)
            })}
        </motion.span>
        <p className='  text-6xl h-[20vh] bg-red-500 ' style={{zIndex:999}}>
           
        </p>
    </div>
  )
}

export default Textcomp