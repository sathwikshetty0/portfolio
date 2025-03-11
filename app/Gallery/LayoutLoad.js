import React from "react";
import Card from "../Components/Card/card";

function LayoutLoad() {
  return (
    <div>
      <div className="hidden lg:block">
        <LayoutLoadLg />
      </div>
      <div className="block lg:hidden ">
      <LayoutLoadSM/>
        </div>
    </div>
  );
}

export default LayoutLoad;

const LayoutLoadSM = () => {
  return (
    <div className="flex flex-col mt-24 m-5 gap-16 bg-white/30 backdrop-blur-sm rounded-xl
     animate-pulse h-[70vh] w-[70vw]">
      

    </div>
  );

};

const LayoutLoadLg = () => {
    const items= Array(1,2,34,4,5,677)
  return (
    <div className="flex flex-col mt-24 m-5 gap-16 bg-white/30 backdrop-blur-sm rounded-xl
     animate-pulse h-[70vh] w-[70vw] text-center text-4xl ">
    
     </div>
        
  );
};
