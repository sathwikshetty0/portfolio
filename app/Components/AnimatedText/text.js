import React from "react";

import styles from "./styles.module.css"
// const Textmap ({word})=>{
//     return(
//     <></>
//     );
// }
const Text = ({ text }) => {
  return (
    <div className=" h-[100vh] w-[100vw] bg-black flex items-center justify-center">
    <div className="text-center text-5xl font-thin text-indigo-300">
    {text.split('').map((child , idx)=>{
      return(<span key={idx} className={styles.hoverText}>
        {child}
      </span>);
    })}
      </div>
    </div>
  );
};

export default Text;
