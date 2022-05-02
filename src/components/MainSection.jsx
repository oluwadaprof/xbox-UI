import React from "react";
import MainSlider from "./MainSlider";
import Button from "./Button";
import TrendingContainer from "./TrendingContainer";
import PaidGames from "./PaidGames";
import Footer from "./Footer";
import { useLayoutEffect, useState } from "react";

 export const useWindowPosition = () => {
    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
      function updatePosition() {
        setPosition(window.pageYOffset);
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
    return scrollPosition;
  };

  

function MainSection() {
    return (
        <div className="absolute overflow-scroll left-[9.1rem] mt-10 top-10 h-screen w-screen mb-[50rem]">
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
