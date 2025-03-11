"use client";
import {AnimatePresence, delay, motion } from "framer-motion"

import React from 'react'
import styles from './menu.module.css'
import Nav from "./nav";

function Menu({active}) {
    const variants={
        animate :{
            width:320,
            height:390,
            top:"-25px",
            right:"-25px",
            transition:{
                duration :0.75 , ease :[0.76,0,0.24,1]
            }
        },
        initial:{
            width:10,
            height:20,
            top:0,
            right:0,
            transition:{
                duration :0.75 ,delay:0.35, ease :[0.76,0,0.24,1]
            }
        }
    }
  return (
    <div className={styles.header}>
        <motion.div className={styles.menu}
        variants={variants}
        animate={active ? "animate" : "initial"}
        initial="initial"
        >
            <AnimatePresence>

           {active && <Nav />}
            </AnimatePresence>
        </motion.div>
        </div>
  )
}

export default Menu