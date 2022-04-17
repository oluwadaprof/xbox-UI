import React from 'react'
import xboxIcon from '../assets/Vector.png';
import { MdOutlineLibraryAdd } from "react-icons/md";
import azicon from '../assets/Vector 2.png'
import blackjack from '../assets/istockphoto-1320296956-612x612.png'
import arrowIcon from '../assets/arrow.png'


function SideNav() {
    return (
        <div className='bg-[#070707]   h-screen w-20'>
            <div className="flex flex-col gap-x-20 h-40  w-20">
                <img src={xboxIcon} className='mt-4 ml-6 scale-[.8] h-8 w-8' alt="logo" />
                <div className='cursor-pointer mt-10 ml-5 w-10 h-10 scale-[1.3] rounded-[50%] bg-[#252525]'>
                    <MdOutlineLibraryAdd className='mt-3 ml-3 text-white' />
                </div>
                <hr className=' mt-6 ' />
            </div>
            <div className="flex gap-x-20 flex-col ">
                <div className='bg-[#252525] rounded-[50%] ml-5 mt-3 w-10 h-10 scale-[1.3]'>
                    <img src={azicon} className='mt-1 ml-1 scale-[.4] h-8 w-8' alt="logo" />
                    <img src={blackjack} alt="jack-icon" className='cursor-pointer mt-3 rounded-[50%]' />
                </div>
                <div className='absolute bg-[#252525] left-4 bottom-9 cursor-pointer rounded-[50%] w-12 h-12'>
                    <img src={arrowIcon} alt="jack-icon" className=' mt-3.5 ml-3 scale-[.9]' />
                </div>
            </div>


        </div>
    )
}

export default SideNav