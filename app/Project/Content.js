"use client";

import React from "react";
import { motion } from "framer-motion";
import TextReveal from "../About/textReveal";

function Content({ image, title, description, rev, container, item }) {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <ImageCard
        image={image}
        title={title}
        description={description}
        item={item}
        rev={rev}
      />
    </motion.div>
  );
}

export default Content;

function ImageCard({ image, title, description, rev, item }) {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="visible"
      className="flex lg:flex-row flex-col gap-5 lg:m-1 m-8 sm:m-3"
      
    >
      <div className="lg:h-[30vh] lg:w-[50vw] ">
        <img
          src={image}
          style={{
            borderRadius: "5%",
          }}
          alt={title}
        />
      </div>
      <div className="lg:p-3 lg:ml-[5%]  text-neutral-400">
        <h1 className="text-white text-3xl lg:text-4xl ">{title}</h1>
        <TextReveal>{description}</TextReveal>
      </div>
    </motion.div>
  );
}
