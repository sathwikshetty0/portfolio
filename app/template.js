"use client";
import { motion ,AnimatePresence} from "framer-motion";

export default function Template({ children }) {
    return (
    <div>
        

        <motion.div
        initial={{opacity:0 ,y:100}}
        animate={{opacity:1, y:0,
            transition:{
                duration:0.5,
                delay:0.5,
        
            }, y:0}}
        transition={{ease:[0.76,0,0.24,1],duration:0.5 ,opacity:{delay:0.5}}}
        >{children}</motion.div>
    </div>)
  }