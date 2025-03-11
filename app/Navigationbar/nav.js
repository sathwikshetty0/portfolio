"use client";
import {delay, motion } from "framer-motion"
import React from 'react'
import styles from './menu.module.css'
import { navContent } from "../utility/utils";
import Link from "next/link";

function Nav() {
    const handleClick = () => {
        // Clear sessionStorage when the link is clicked
        sessionStorage.clear();
      };
    const perspective={
        initial:{
            y:0,
            opacity:0
        },
        animate:(index)=>({
            y:0,
            opacity:1,
            transition:{
                duration:0.5
                ,delay:0.6+ (index*0.1)
            }
        }),
        exit:{
            y:0,
            opacity:0,
            transition:{
                duration:0.5,
                ease:[0.76,0,0.24,1]
            }}
    }
  return (
    <div className={styles.nav}>
        <div className={styles.navBody}>
            {navContent.map((item,index)=>{
                return(
                    <motion.div
                    key={index}
                    custom={index}
                    variants={perspective}
                    animate="animate"
                    exit="exit"
                    initial="initial"
                    href={item.link}
                    >
                        <Link href={item.link}
                        onClick={handleClick}
                        >{item.Name}</Link>
                    </motion.div>
                )
            })}

        </div>
        


    </div>
  )
}

export default Nav