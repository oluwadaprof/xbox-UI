import React from "react";
import MainSection from "../components/MainSection";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Button from "../components/Button";

function Home() {
  return (
    <div className="overflow-hidden relative flex bg-[#252525]">
      <SideNav />
      <TopNav />
      <div >
        <MainSection />
       
      </div>

    </div>
  );
}

export default Home;
