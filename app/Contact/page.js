

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Menu from "../Navigationbar/menu";
import Zoop from "../Components/AnimatedText/zoop";

function Page() {
  const [activeSection, setActiveSection] = useState(null);
  const [menu, setMenu] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
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
}


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
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <a
//               href="https://www.linkedin.com/in/sathwikshettyn"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-xl lg:text-2xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
//                 <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
//               </svg>
//               LinkedIn
//             </a>
//             <a 
//               href="https://github.com/sathwikshettyn"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-xl lg:text-2xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
//                 <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
//               </svg>
//               GitHub
//             </a>
//             <a 
//               href="https://twitter.com/sathwikshettyn"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-xl lg:text-2xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
//                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
//               </svg>
//               Twitter
//             </a>
//             <a 
//               href="https://www.instagram.com/sathwikshettyn/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-xl lg:text-2xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
//               </svg>
//               Instagram
//             </a>
//             <a 
//               href="https://drive.google.com/file/d/16GDdB5DtGbXrTwKZPIuqiDbPACuYC79R/view?usp=drive_link"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-xl lg:text-2xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//               Resume
//             </a>
//             <a 
//               href="https://medium.com/@sathwikshettyn"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-xl lg:text-2xl text-gray-300 hover:text-[#c9fd74] transition-colors duration-300"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
//                 <path d="M7.5 5.25C8.03043 5.25 8.53914 5.46071 8.91421 5.83579C9.28929 6.21086 9.5 6.71957 9.5 7.25V16.75C9.5 17.2804 9.28929 17.7891 8.91421 18.1642C8.53914 18.5393 8.03043 18.75 7.5 18.75C6.96957 18.75 6.46086 18.5393 6.08579 18.1642C5.71071 17.7891 5.5 17.2804 5.5 16.75V7.25C5.5 6.71957 5.71071 6.21086 6.08579 5.83579C6.46086 5.46071 6.96957 5.25 7.5 5.25ZM16.5 5.25C17.0304 5.25 17.5391 5.46071 17.9142 5.83579C18.2893 6.21086 18.5 6.71957 18.5 7.25V16.75C18.5 17.2804 18.2893 17.7891 17.9142 18.1642C17.5391 18.5393 17.0304 18.75 16.5 18.75C15.9696 18.75 15.4609 18.5393 15.0858 18.1642C14.7107 17.7891 14.5 17.2804 14.5 16.75V7.25C14.5 6.71957 14.7107 6.21086 15.0858 5.83579C15.4609 5.46071 15.9696 5.25 16.5 5.25Z"></path>
//                 <path d="M22 6.25h-1.25v11.5H22v-11.5zm-19.75 0H1v11.5h1.25v-11.5z"></path>
//               </svg>
//               Medium
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