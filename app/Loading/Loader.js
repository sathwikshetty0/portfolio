"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence} from "framer-motion";


function Loader({children}) {
    const [presence , setPresence] = React.useState(false);

    const[windowWidth, setWindowWidth] = React.useState(0);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
      setTimeout(() => {
        setPresence(true);
      }, 4000);
     
    });
    const width = windowWidth > 768 ? 300 : 180;

    // initial={{
    //   }}
    //   animate={{
    //     background: "linear-gradient(90deg, #eab308,#06b6d4  20%)",
    //     WebkitBackgroundClip: "text",
    //     WebkitTextFillColor: "transparent",
    //   }}
    //   transition={{
    //     duration: 2,
    //     ease: "easeInOut",
    //     repeat: Infinity,
    //     repeatType: "reverse",
    //   }}


    const variants = {
        initial: {
            background: "linear-gradient(90deg, #eab308,#06b6d4  20%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          
           x:-width-90
        },
        
        animate:{
            
            x:0,
            opacity:1,
            background: "linear-gradient(180deg,#ef4444 , #a855f7 90%   )",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
            transition: {
                duration: 2.43,
                
              },

        },
       exit: {
            opacity: 0,
            transition: {
              duration: 0.5,
             
              
            }
        }
    }
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
        exit: {
            opacity: 0,
            
            transition: {
              duration: 0.5,
              delay: 1.5,
              
        }}
      };
    
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
                delay: 0.3,
                
          }
        }
      };

      const firstBracket = {
        initial: {
          
           x:150,
        },
        animate:{
            
            x:0,
            transition: {
                duration: 1.43,
                
              },
            
            }
        
      };
        const secondBracket = {
            initial: {
          
                x:-150,
             },
             animate:{
                 
                 x:0,
                 transition: {
                     duration: 1.43,
                     
                   },
                 
                 }
        };
        const textVariants = {
            hidden: { opacity: 0, scale:0.8 },
            visible: { opacity: 1 ,scale:1, transition: {
                duration: 2.43,
                delay: 0.7,
                
              },},
          };
          const childVairants = {  
          };

         

  return (
    <div className="flex flex-row text-center items-center   justify-center h-screen text-4xl lg:text-7xl">
       
      
        <div className="flex flex-row">
        <AnimatePresence>
            {presence ==false &&
            <BracketStyle text="<" variants={{
                initial: {
                    background: "linear-gradient(90deg, #60a5fa , #9333ea 50%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    
                },
                animate:{
                    background: "linear-gradient(180deg, #ef4444,#a855f7  90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transition: {
                        duration: 2.43,
                        
                      },
                },
                exit:{
                    opacity: 0,
            transition: {
              duration: 0.5,
              
        }

                }
            }} />
            }
            </AnimatePresence>
            <AnimatePresence>
            {presence ==false &&
                <TextStyle text={"Loading;)"} variants={container} secondVariants={item}/>
            }
            </AnimatePresence>
            <AnimatePresence>
               {presence ==false &&
               <BracketStyle text="/>" variants={variants} />
               }
               </AnimatePresence>
            
        {/* <BracketStyle text="<" variants={firstBracket}/>

        <TextStyle text={"Developer"} variants={textVariants} secondVariants={childVairants}/>

        <BracketStyle text="/>" variants={secondBracket} /> */}
      </div>
      {/* <AnimatePresence>
         { intro ==false &&
         
         <motion.div
          className="absolute text-2xl lg:text-4xl"
          initial={{
            opacity: 0,
          
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 5,
              staggerChildren: 0.2,
          
            },
           
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              delay: 1.5,
          }}}
          >
            <motion.p
            
            >Designed and Developed by <span className="text-purple-500">Sanjan</span></motion.p>
            <motion.p 
            
            className="text-sm lg:text-lg absolute top-56 lg:top-96 text-center left-10 lg:left-24 opacity-50">
                For Better experience choose large screen  </motion.p>
          </motion.div>}
      </AnimatePresence> */}
<motion.div
initial={{
    opacity: 0,
}}
animate={{
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.01,
      staggerChildren: 0.2,
  
    },
   
}}  
>
  {children}

</motion.div>
    </div>
  );
}

export default Loader;

const BracketStyle = ({ text, variants }) => {
  
  return (
    <motion.div className="bg-gradient-to-t from-purple-600 from-30% to-red-500 text-transparent bg-clip-text relative"
    variants={variants} animate="animate" initial="initial"  exit="exit"
    >
      
      {text}
    </motion.div>
  );
};

const TextStyle = ({ text ,variants, secondVariants}) => {
  
  return (
    <motion.div variants={variants} initial="hidden" animate="visible" exit="exit">
      {text.split("").map((letter, idx) => {
        return (
          <motion.span variants={secondVariants} key={idx}>
            {letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
