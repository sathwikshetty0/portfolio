"use client";
import React from 'react'
import { AboutMe } from '../utility/utils';
import { motion } from 'framer-motion';
function TextReveal({children}) {
  const charVariants ={
    hidden:{
      opacity:0,
     
    },
    visible:{
      opacity:1,
     
      transition:{
        duration:0.5
      }
    }
  }


  return (
    <div>
      <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{staggerChildren:0.02}}

      >
        {String(children).split('').map((char, index) => {
          return (
            <motion.span
              key={index}
              variants={charVariants}
              
            >
              {char}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  )
}

export default TextReveal

const splitString = (str) => {  
    const character = [];
    const regex =/[\s\S]/gu;

    let match;
    while (match = regex.exec(str)!==null) {
        character.push(match[0]);
    }

    return character;
}