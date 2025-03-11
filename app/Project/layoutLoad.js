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
    <div className="flex justify-center items-center flex-col m-5 animate-pulse gap-8 mt-16">
      <Card />
      <Card />
      <Card />

    </div>
  );

};

const LayoutLoadLg = () => {
    const items= Array(1,2,34,4,5,677)
  return (
    <div className="flex flex-col mt-24 lg:-ml-10 m-5 gap-16 animate-pulse">
                {/* first content */}
                <div className="flex flex-row gap-8 ">
                    <div className="h-[30vh] w-[30vw] bg-white/30 backdrop-blur-md rounded-3xl">
                        
                    </div>
                    <div className="flex gap-3 mt-5
                    flex-col">
                        {
                            items.map((elements , idx)=>{
                                
                                return(<div key={idx} className={`bg-white/30 backdrop-blur-md rounded-sm h-5 w-[${35-idx}vw]`}/>
                               );
                            })
                        }
                    </div>
                </div>
                 {/* second content */}
                <div>
                <div className="flex flex-row gap-8 ">
                <div className="flex gap-3 mt-5
                    flex-col">
                        {
                            items.map((elements , idx)=>{
                                
                                return(<div key={idx} className={`bg-white/30 backdrop-blur-md rounded-sm h-5 w-[${35-idx}vw]`}/>
                               );
                            })
                        }
                    </div>
                    <div className="h-[30vh] w-[30vw] bg-white/30 backdrop-blur-md rounded-3xl">
                        
                    </div>
                   
                </div>
                </div>
            </div>
        
  );
};
