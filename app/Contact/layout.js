import React from "react";
import NavigationBar from "../Navigationbar/navigatebar";

function Layout({ children }) {
  return (
    <div className="flex flex-row  h-[100vh]  ">
      <div
      className="lg:basis-[75vw] basis-[100vw]"
      >
        
        {children}
        
        </div>
      
        <NavigationBar active={"Contact"} />
      
    </div>
  );
}

export default Layout;

// cut navigation menu from all layout and make a new nav component\
// and import it in all layout use userouter hook to to know the current page
//text bit small in mobile screen
//and layout  margin left should be reduced in mobile screen
