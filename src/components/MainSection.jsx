import React from "react";
import MainSlider from "./MainSlider";
import Button from "./Button";
import TrendingContainer from "./TrendingContainer";


function MainSection() {
    return (
        <div className="absolute overflow-scroll left-40 top-20 h-screen w-screen mb-[50rem]">
            <MainSlider />
            <div className="mt-56 w-96  ">
                <Button />
            </div>
            <TrendingContainer />
        </div>
    );
}

export default MainSection;
