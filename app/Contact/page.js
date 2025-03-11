

// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Menu from "../Navigationbar/menu";
// import Zoop from "../Components/AnimatedText/zoop";

// function Page() {
//   const [activeSection, setActiveSection] = useState(null);
//   const [menu, setMenu] = useState(false);

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {<Menu active={menu} />}
      
//       {/* Menu button */}
//       <button 
//         className="bg-[#c9fd74] lg:hidden block fixed top-8 right-8 z-[1000] text-black font-bold py-4 px-6 rounded-full"
//         onClick={() => setMenu(!menu)}
//       >
//         <Zoop>Menu</Zoop>
//       </button>
      
//       {/* Main heading with animated underline */}
//       <div className="pt-24 px-8 lg:px-16">
//         <h1 className="lg:text-9xl text-7xl font-black text-white mb-4">
//           Get In Touch<span className="text-purple-500">.</span>
//         </h1>
//         <motion.div 
//           className="h-1 bg-purple-500 w-24 lg:w-40 mb-16"
//           initial={{ width: 0 }}
//           animate={{ width: "40%" }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         />
//       </div>
      
//       {/* Contact sections in a grid layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-16 mb-16">
//         <div 
//           className="bg-neutral-900 rounded-xl p-8 hover:bg-neutral-800 transition-all duration-300"
//           onMouseEnter={() => setActiveSection("mail")}
//           onMouseLeave={() => setActiveSection(null)}
//         >
//           <h2 className="text-5xl lg:text-6xl font-black mb-6">
//             {activeSection === "mail" ? 
//               <FramedText text="Mail Me?" /> : 
//               <span>Mail Me?</span>
//             }
//           </h2>
//           <a 
//             href="mailto:sathwikshettyn0@gmail.com" 
//             className="text-2xl lg:text-3xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
//           >
//             sathwikshettyn0@gmail.com
//           </a>
//           <div className="mt-8">
//             <motion.div 
//               className="w-12 h-12 border border-[#c9fd74] rounded-full flex items-center justify-center"
//               whileHover={{ scale: 1.1 }}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#c9fd74" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </motion.div>
//           </div>
//         </div>
        
//         <div 
//           className="bg-neutral-900 rounded-xl p-8 hover:bg-neutral-800 transition-all duration-300"
//           onMouseEnter={() => setActiveSection("connect")}
//           onMouseLeave={() => setActiveSection(null)}
//         >
//           <h2 className="text-5xl lg:text-6xl font-black mb-6">
//             {activeSection === "connect" ? 
//               <FramedText text="Lets Connect." /> : 
//               <span>Lets Connect.</span>
//             }
//           </h2>
//           <div className="flex flex-col md:flex-row gap-8">
//             <a
//               href="https://www.linkedin.com/in/sathwikshettyn"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-2xl lg:text-3xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
//                 <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
//               </svg>
//               LinkedIn
//             </a>
//             <a 
//               href="https://drive.google.com/file/d/16GDdB5DtGbXrTwKZPIuqiDbPACuYC79R/view?usp=drive_link"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-2xl lg:text-3xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//               Resume
//             </a>
//           </div>
//         </div>
//       </div>
      
//       {/* Decorative elements */}
//       <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-[#c9fd74] to-cyan-400 opacity-80"></div>
//       <div className="fixed top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 via-[#c9fd74] to-cyan-400 opacity-80"></div>
//     </div>
//   );
// }

// export default Page;

// const FramedText = ({ text }) => {
//   return (
//     <motion.span
//       className="font-black"
//       initial={{
//         background: "linear-gradient(90deg, #22d3ee, #10b981 50%)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//       }}
//       animate={{
//         background: "linear-gradient(90deg, #ffffff, #06b6d4 20%)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//       }}
//       transition={{
//         duration: 2,
//         ease: "easeInOut",
//         repeat: Infinity,
//         repeatType: "reverse",
//       }}
//     >
//       {text}
//     </motion.span>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Menu from "../Navigationbar/menu";
import Zoop from "../Components/AnimatedText/zoop";

// Enhanced mouse follower effect with trail
const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const maxTrailPoints = 8; // Number of trail points to show
  
  useEffect(() => {
    // Only activate after a very short delay
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 200);
    
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Update trail positions
      setTrailPositions(prevPositions => {
        const newPositions = [newPosition, ...prevPositions];
        // Keep only maxTrailPoints positions
        return newPositions.slice(0, maxTrailPoints);
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <>
      {/* Main mouse follower */}
      <motion.div 
        className="fixed pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 100,
          opacity: isActive ? 1 : 0
        }}
        transition={{ 
          type: "spring", 
          damping: 8,     // Even lower damping for faster response
          stiffness: 250, // Higher stiffness for quicker movement
          mass: 0.4       // Lower mass makes it more responsive
        }}
      >
        <div 
          className="w-60 h-60 rounded-full opacity-30 blur-2xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-400"
        />
      </motion.div>
      
      {/* Trail elements */}
      {trailPositions.map((position, index) => (
        <motion.div 
          key={index}
          className="fixed pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{
            x: position.x - (100 + index * 10),
            y: position.y - (200 + index * 10),
            opacity: isActive ? (1 - (index / maxTrailPoints)) * 0.6 : 0
          }}
          transition={{ 
            type: "spring", 
            damping: 20 + index * 3,   // Increasing damping for trailing elements
            stiffness: 180 - index * 10, // Decreasing stiffness for trailing elements
            mass: 0.6 + index * 0.1    // Increasing mass for trailing elements
          }}
        >
          <div 
            className={`
              rounded-full blur-xl 
              bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-400
            `}
            style={{
              width: `${56 - index * 5}px`,
              height: `${56 - index * 5}px`,
              opacity: 0.3 - (index * 0.03)
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

function Page() {
  const [activeSection, setActiveSection] = useState(null);
  const [menu, setMenu] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <MouseFollower />
      {<Menu active={menu} />}
      
      {/* Menu button */}
      <button 
        className="bg-[#c9fd74] lg:hidden block fixed top-8 right-8 z-[1000] text-black font-bold py-4 px-6 rounded-full"
        onClick={() => setMenu(!menu)}
      >
        <Zoop>Menu</Zoop>
      </button>
      
      {/* Main heading with animated underline */}
      <div className="pt-24 px-8 lg:px-16">
        <h1 className="lg:text-9xl text-7xl font-black text-white mb-4">
          Get In Touch<span className="text-purple-500">.</span>
        </h1>
        <motion.div 
          className="h-1 bg-purple-500 w-24 lg:w-40 mb-16"
          initial={{ width: 0 }}
          animate={{ width: "40%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      
      {/* Contact sections in a grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-16 mb-16">
        <div 
          className="bg-neutral-900 rounded-xl p-8 hover:bg-neutral-800 transition-all duration-300"
          onMouseEnter={() => setActiveSection("mail")}
          onMouseLeave={() => setActiveSection(null)}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            {activeSection === "mail" ? 
              <FramedText text="Mail Me?" /> : 
              <span>Mail Me?</span>
            }
          </h2>
          <a 
            href="mailto:sathwikshettyn0@gmail.com" 
            className="text-2xl lg:text-3xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
          >
            sathwikshettyn0@gmail.com
          </a>
          <div className="mt-8">
            <motion.div 
              className="w-12 h-12 border border-[#c9fd74] rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#c9fd74" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>
          </div>
        </div>
        
        <div 
          className="bg-neutral-900 rounded-xl p-8 hover:bg-neutral-800 transition-all duration-300"
          onMouseEnter={() => setActiveSection("connect")}
          onMouseLeave={() => setActiveSection(null)}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            {activeSection === "connect" ? 
              <FramedText text="Lets Connect." /> : 
              <span>Lets Connect.</span>
            }
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <a
              href="https://www.linkedin.com/in/sathwikshettyn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-2xl lg:text-3xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              LinkedIn
            </a>
            <a 
              href="https://drive.google.com/file/d/16GDdB5DtGbXrTwKZPIuqiDbPACuYC79R/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-2xl lg:text-3xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-[#c9fd74] to-cyan-400 opacity-80"></div>
      <div className="fixed top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 via-[#c9fd74] to-cyan-400 opacity-80"></div>
    </div>
  );
}

export default Page;

const FramedText = ({ text }) => {
  return (
    <motion.span
      className="font-black"
      initial={{
        background: "linear-gradient(90deg, #22d3ee, #10b981 50%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      animate={{
        background: "linear-gradient(90deg, #ffffff, #06b6d4 20%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {text}
    </motion.span>
  );
};