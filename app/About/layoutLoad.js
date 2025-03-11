import React from "react";
import Card from "../Components/Card/card";

function LayoutLoad() {
    return(
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

const LayoutLoadLg = () => {
    const list = [1, 3, 4 ,9,8,6, 20];
    return (
    <div className="max-h-full flex flex-row h-[100%] gap-3 animate-pulse">
      <div className="basis-2/3 flex flex-col gap-10  ">
        {/* content  */}
            <div className=" basis-1/3 flex flex-col gap-2">
            {/* para About me */}
            {list.map((item, index) => (
                <div key={index} className={`bg-white/30 backdrop-blur-md h-8 w-[${50-item}vw]`}>
               
              </div>
            ))}
            </div>
            <div className=" basis-1/3">
            {/* cards */}
            <CardLayout/>
           
            </div>

      </div>
      <div className="basis-1/3 bg-white/30 backdrop-blur-md">
        {/* image */}

      </div>
    </div>
  );
}

// const LayoutLoadSM = () => {
//     return (
//         <div className="flex  flex-col m-5 animate-pulse bg-slate-500  mt-16">
//            <div></div>
//            <div></div>
//            <div>
//             <CardLayout/>
//            </div>

//         </div>
//     );
// }

const LayoutLoadSM = () => {
    const list = [1, 3, 4 ,9, 20];

    return (
      <div className="flex  flex-col m-5 animate-pulse gap-5 mt-16">
        <Card />
        <div className=" basis-1/3 flex flex-col gap-2">
            {/* para About me */}
            {list.map((item, index) => (
                <div key={index} className={`bg-white/30 backdrop-blur-md h-8 w-[${50-item}vw]`}>
               
              </div>
            ))}
            </div>
        <CardLayoutSM  />
  
      </div>
    );
  
  };

const CardLayoutSM = () => {
    return(
        <div className="flex flex-row  gap-1 ">
        <div className=" flex flex-col gap-1 ">
            {/* sub cards upon each other */}
                <div className="bg-white/30 backdrop-blur-md h-[15vh] w-[35vw] rounded-xl"></div>
                <div className="bg-white/30 backdrop-blur-md h-[10vh] w-[35vw] rounded-xl"></div>

        </div>
        <div className=" ">

            {/* large card redirecting project page */}
        <div className="bg-white/30 backdrop-blur-md h-[25vh] w-[35vw] rounded-xl"></div>
                                
        </div>
        
    </div>
    );
}

const CardLayout = ({height , width}) => {
    return (
        <div className="flex flex-row  gap-1 max-h-full">
            <div className=" flex flex-col gap-1 h-full">
                {/* sub cards upon each other */}
                    <div className="bg-white/30 backdrop-blur-md h-[25vh] w-[23vw] rounded-xl"></div>
                    <div className="bg-white/30 backdrop-blur-md h-[15vh] w-[23vw] rounded-xl"></div>

            </div>
            <div className=" ">

                {/* large card redirecting project page */}
            <div className="bg-white/30 backdrop-blur-md h-full w-[23vw] rounded-xl"></div>
                                    
            </div>
            
        </div>
    )
}