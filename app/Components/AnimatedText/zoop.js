"use client";
import React from "react";
import { motion } from "framer-motion";



export default function Zoop ({ children})  {
    const DURATION = 0.25;
    const STAGGER=0.025;
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"

      className="relative block overflow-hidden
          whitespace-nowrap 
          "
          style={{lineHeight:1}}
      
    >
      <div>
        {children.split("").map((child, idx) => {
          return (
            <motion.span 
            variants={{
                initial: {
                    y: 0,
                },
                hovered: {
                    y: "-105%",
                },
            }}
            transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay:  STAGGER * idx,
            }}
            key={idx} className="inline-block">
              {child+'  '}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((child, idx) => {
          return (
            <motion.span
            variants={{
                initial: {
                    y: "100%",
                },
                hovered: {
                    y: 0,
                },
            }}
            transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay:  STAGGER * idx,
            }}
            key={idx} className="inline-block">
              {child}
              
              
            </motion.span>
            
          );
        })}
        
      </div>
      
    </motion.div>
  );
};
