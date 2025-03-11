"use client";
import React from 'react'
import {AnimatePresence, delay, motion} from 'framer-motion'

function Transition({children}) {
    const [presence , setPresence] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setPresence(true);
        }, 4000);
    });
  return (
    <motion.div 
    initial={{opacity:0 ,y:100}}
    animate={{opacity:1,
        transition:{
            duration:0.5,
            delay:4.5,
            
        }, y:0}}
    transition={{opacity:{delay:1.5}}}
    >
        <AnimatePresence>
        {presence===false && 
        <motion.div className='h-[100vh] w-[100vw] bg-red-500 text-white'
        initial={{opacity:0 ,y:100}}
        animate={{opacity:1,y:0,transition:{duration:3}}}
        exit={{opacity:0}}
        >
            s
            </motion.div>}
        </AnimatePresence>
        {children}
        </motion.div>
  )
}

export default Transition