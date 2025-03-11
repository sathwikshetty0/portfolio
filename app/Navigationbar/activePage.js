"use client";
import { motion } from "framer-motion";

export default function ActivePage({title})
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
             className="text-2xl font-black cursor-pointer">
              
    
              {title}
          
              </motion.div>
    
      );
    }