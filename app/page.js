"use client";
import React, { useEffect, useState } from 'react'
import Home from './Home'
import dynamic from 'next/dynamic';
import Loader from './Loading/Loader';
import { motion } from 'framer-motion';
const GlowingCube = dynamic(() => import('./Components/sphere/cube'), { ssr: false });


 function Page() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [presence, setpresence] = useState(true);


  useEffect(() => {
    if (window.innerWidth<500) {
      setY(0.3)
      
    }
    else if (window.innerWidth>2100) {
      setX(0)

    }
    else {
      
      setX(1.2)

    }
    if (!sessionStorage.getItem('reloaded')) {
      // Set a flag in sessionStorage to indicate the page has been reloaded
      sessionStorage.setItem('reloaded', 'true');
     
      
      
      // Reload the page
      window.location.reload();
    }

    // const timer = 
    setTimeout(() => {
 // Full page reload
    setpresence(false)
    
    }, 4500);
  
    // return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {
        presence ? <Loader/> :<motion.div
        initial={{opacity:0 ,y:100}}
        animate={{opacity:1, y:0,
            transition:{
                duration:0.5,
                delay:0.5,
        
            }, y:0}}
        >
          <div style={{ position: 'relative ', height: '100vh',width:"100vw", left:500, overflow: 'hidden', left:0 }}>
          <GlowingCube position={{x:x , y:y,z:0}}/>
          <div className='absolute lg:top-0 ' > <Home/>
              </div>
              </div>
        </motion.div>
 }
    </div>
   
  )
}

export default Page