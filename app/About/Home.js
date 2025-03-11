

// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { AboutMe } from "../utility/utils";
// import { motion } from "framer-motion";
// import TextReveal from "./textReveal";
// import Zoop from "../Components/AnimatedText/zoop";

// function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       <MouseFollower />
//       <LayoutLoad />
//     </div>
//   );
// }

// export default Home;

// // Enhanced mouse follower effect - faster and brighter
// const MouseFollower = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isActive, setIsActive] = useState(false);
  
//   useEffect(() => {
//     // Only activate after a very short delay
//     const timer = setTimeout(() => {
//       setIsActive(true);
//     }, 200);
    
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
    
//     window.addEventListener("mousemove", handleMouseMove);
    
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       clearTimeout(timer);
//     };
//   }, []);
  
//   return (
//     <motion.div 
//       className="fixed pointer-events-none z-0"
//       animate={{
//         x: mousePosition.x - 150,
//         y: mousePosition.y - 280,
//         opacity: isActive ? 1 : 0
//       }}
//       transition={{ 
//         type: "spring", 
//         damping: 10,    // Lower damping for faster response
//         stiffness: 200, // Higher stiffness for quicker movement
//         mass: 0.5       // Lower mass makes it more responsive
//       }}
//     >
//       <div 
//         className="w-56 h-56 rounded-full opacity-30 blur-2xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-400"
//       />
//     </motion.div>
//   );
// };

// function LayoutLoad() {
//   return (
//     <div className="container mx-auto px-4 relative z-10">
//       <div className="hidden lg:block">
//         <LayoutLoadLg />
//       </div>
//       <div className="block lg:hidden">
//         <LayoutLoadSM />
//       </div>
//     </div>
//   );
// }

// const LayoutLoadLg = () => {
//   const description = AboutMe.Description;
  
//   return (
//     <div className="flex flex-row items-center justify-between h-full gap-8 mt-24 mb-16">
//       <div className="w-2/3 flex flex-col gap-12">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl text-neutral-200 leading-relaxed"
//         >
//           <TextReveal>{description}</TextReveal>
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <motion.a 
//             href="https://drive.google.com/file/d/16GDdB5DtGbXrTwKZPIuqiDbPACuYC79R/view?usp=drive_link"
//             whileHover={{ 
//               scale: 1.05, 
//               boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="w-40 h-14 flex items-center justify-center bg-black text-white font-bold rounded-full relative overflow-hidden group border border-purple-500"
//           >
//             <motion.div 
//               className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20"
//               initial={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             />
//             <span className="relative z-10">
//               <Zoop>Resume</Zoop>
//             </span>
//           </motion.a>
//         </motion.div>
//       </div>
      
//       <motion.div 
//         className="w-1/3 relative overflow-hidden rounded-2xl border border-gray-800"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.2, delay: 0.5 }}
//         whileHover={{ scale: 1.02 }}
//       >
//         <motion.div 
//           className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"
//         />
        
//         <img 
//           src="images/profile.JPG" 
//           alt="Profile"
//           className="w-full h-auto object-cover relative z-0"
//         />
//       </motion.div>
//     </div>
//   );
// };

// const LayoutLoadSM = () => {
//   const description = AboutMe.Description;
  
//   return (
//     <div className="flex flex-col items-center gap-8 py-16">
//       <motion.div 
//         className="w-52 h-52 rounded-full overflow-hidden mx-auto relative border border-gray-800"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//         whileHover={{ scale: 1.03 }}
//       >
//         <motion.div 
//           className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"
//         />
        
//         <img 
//           src="images/profile.JPG" 
//           alt="Profile"
//           className="w-full h-full object-cover relative z-0" 
//         />
//       </motion.div>
      
//       <motion.div 
//         className="text-xl text-neutral-200 text-center max-w-md mx-auto px-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//       >
//         <TextReveal>{description}</TextReveal>
//       </motion.div>
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.8 }}
//         className="mt-8"
//       >
//         <motion.a 
//           href="https://drive.google.com/file/d/16GDdB5DtGbXrTwKZPIuqiDbPACuYC79R/view?usp=drive_link"
//           whileHover={{ 
//             scale: 1.05, 
//             boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="w-44 h-16 flex items-center justify-center bg-black text-white font-bold rounded-full relative overflow-hidden group border border-purple-500"
//         >
//           <motion.div 
//             className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20"
//             initial={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           />
//           <span className="relative z-10">
//             <Zoop>
//               <span className="text-xl">Resume</span>
//             </Zoop>
//           </span>
//         </motion.a>
//       </motion.div>
//     </div>
//   );
// };


"use client";
import React, { useEffect, useState, useRef } from "react";
import { AboutMe } from "../utility/utils";
import { motion } from "framer-motion";
import TextReveal from "./textReveal";
import Zoop from "../Components/AnimatedText/zoop";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <MouseFollower />
      <LayoutLoad />
    </div>
  );
}

export default Home;

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
          y: mousePosition.y - 280,
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
            x: position.x - (100 + index * 20),
            y: position.y - (200 + index * 20),
            opacity: isActive ? (1 - (index / maxTrailPoints)) * 0.6 : 0
          }}
          transition={{ 
            type: "spring", 
            damping: 30 + index * 3,   // Increasing damping for trailing elements
            stiffness: 180 - index * 10, // Decreasing stiffness for trailing elements
            mass: 1 + index * 0.1    // Increasing mass for trailing elements
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

function LayoutLoad() {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="hidden lg:block">
        <LayoutLoadLg />
      </div>
      <div className="block lg:hidden">
        <LayoutLoadSM />
      </div>
    </div>
  );
}

const LayoutLoadLg = () => {
  const description = AboutMe.Description;
  
  return (
    <div className="flex flex-row items-center justify-between h-full gap-8 mt-24 mb-16">
      <div className="w-2/3 flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl text-neutral-200 leading-relaxed"
        >
          <TextReveal>{description}</TextReveal>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a 
            href="https://drive.google.com/file/d/16GDdB5DtGbXrTwKZPIuqiDbPACuYC79R/view?usp=drive_link"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-40 h-14 flex items-center justify-center bg-black text-white font-bold rounded-full relative overflow-hidden group border border-purple-500"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">
              <Zoop>Resume</Zoop>
            </span>
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div 
        className="w-1/3 relative overflow-hidden rounded-2xl border border-gray-800"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"
        />
        
        <img 
          src="images/profile.JPG" 
          alt="Profile"
          className="w-full h-auto object-cover relative z-0"
        />
      </motion.div>
    </div>
  );
};

const LayoutLoadSM = () => {
  const description = AboutMe.Description;
  
  return (
    <div className="flex flex-col items-center gap-8 py-16">
      <motion.div 
        className="w-52 h-52 rounded-full overflow-hidden mx-auto relative border border-gray-800"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"
        />
        
        <img 
          src="images/profile.JPG" 
          alt="Profile"
          className="w-full h-full object-cover relative z-0" 
        />
      </motion.div>
      
      <motion.div 
        className="text-xl text-neutral-200 text-center max-w-md mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <TextReveal>{description}</TextReveal>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-8"
      >
        <motion.a 
          href="https://drive.google.com/file/d/16GDdB5DtGbXrTwKZPIuqiDbPACuYC79R/view?usp=drive_link"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="w-44 h-16 flex items-center justify-center bg-black text-white font-bold rounded-full relative overflow-hidden group border border-purple-500"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">
            <Zoop>
              <span className="text-xl">Resume</span>
            </Zoop>
          </span>
        </motion.a>
      </motion.div>
    </div>
  );
};