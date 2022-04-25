import React from "react";
import MainSlider from "./MainSlider";
import Button from "./Button";
import TrendingContainer from "./TrendingContainer";
import PaidGames from "./PaidGames";
import Footer from "./Footer";


function MainSection() {
    return (
        <div className="absolute overflow-scroll left-[9.1rem]  top-20 h-screen w-screen mb-[50rem]">
            <MainSlider />
            <div className="mt-56 w-96  ">
                <Button />
            </div>
            <TrendingContainer />
            <PaidGames />
            <Footer />
        </div>
    );
}

export default MainSection;
