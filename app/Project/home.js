import React from "react";
import Content from "./Content";
import { projectList } from "../utility/utils";
import { delay } from "framer-motion";

function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.9,
        staggerChildren: 0.8,
        
      },
    },
  };
  const item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        delay:0.7,
      },
    },};
  return (
    <div className="flex flex-col h-screen lg:gap-24 lg:mt-32">
      {projectList.map((project, index) => {
        let rev = 1;
        return (
          <Content key={index} image={project.imageUrl}
          title={project.Name}
          description={project.Description} variants={container} item={item}/>
        );
      })}
    </div>
  );
}

export default Home;
