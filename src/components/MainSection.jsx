import React from "react";
import MainSlider from "./MainSlider";
import Button from "./Button";


function MainSection() {
    return (
        <div className="absolute overflow-scroll left-40 top-20 h-screen w-screen ">
            <MainSlider />
           <div className="mt-56 w-96  ">
           <Button  />
           </div>
          
           
           
            
        </div>
    );
}

export default MainSection;
