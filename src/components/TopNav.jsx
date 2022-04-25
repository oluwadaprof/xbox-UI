import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import greenFeild from "../assets/apps.41394.14247769038588514.png";

function TopNav(nameList) {
      const [isActive, setActive] = useState("store");

  //   const toggleClass = () => {
  //     setActive(!isActive);
  //   };
  return (
    <>
      <div className=" overscroll-none bg-gradient-to-r flex gap-20 from-[#252525] to-[#070707]  h-14  w-screen">
        <div className="mt-3.5 ml-9 flex gap-10">
          <IoIosArrowBack className="ml-4 mt-2 scale-[2] text-gray-400" />
          <div className="flex ml-10 gap-5"> 
            <p className={isActive === "store"?"text-white font-home-font cursor-pointer":"text-gray-500 font-home-font cursor-pointer"} onClick={() => setActive("store")}>STORE</p>
            <p className={isActive === "social"?"text-white font-home-font cursor-pointer":"text-gray-500 font-home-font cursor-pointer"} onClick={() => setActive("social")}>SOCIAL</p>
          </div>
        </div>

        <div className="absolute top-0 right-20 mr-56">
          <FiSearch className="absolute text-white top-4 right-3 z-10" />
          <input
            placeholder="search for games"
            className="absolute top-3 right-0 item-right focus:outline-none placeholder:text-[#979797]  placeholder:scale-[.8] pl-4 rounded-full  w-78 h-7 bg-[#222222]"
          />
        </div>
        <p className="animate-ping overflow-hidden  text-xs bg-red-700 w-3 h-3 absolute z-10 left-[84.3rem] top-[1rem] rounded-full text-white "></p>
        <div className="absolute top-4 right-40  scale-[1.4] flex  gap-4">
         
          <BiBell className="cursor-pointer mt-1 text-white" />
          <div className="cursor-pointer rounded-[50%] bg-[#252525]  h-5 w-5">
            <img className="mt-1 rounded-[50%]" src={greenFeild} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
