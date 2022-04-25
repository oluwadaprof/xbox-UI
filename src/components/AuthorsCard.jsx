import React from 'react';
import { IoLogoTwitter  } from "react-icons/io";
import {AiOutlineGithub} from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";


function AuthorsCard({ role, image, name, color }) {
    return (
        <div className=' ml-11 mt-10 inline-flex gap-x-[3rem] overflow-hidden rounded-[4px] h-[10rem] w-[30rem] bg-[#252525] '>
            <div className=''>
                <img src={image} alt="tobi" className=' h-[12rem] scale-[30rem] w-[10.9rem] ml-[-.5rem] bg-black relative -top-2.5  ' />
                <div className='ml-[12rem]  w-max -mt-[10.2rem]'>
                    <p className={`bg-${color} ml-5 mb-2 font-home-font font-bold scale-125`}>{name}</p>
                    <p className='text-white align-left italic ml-1 font-home-font -mb-3 '>{role}</p>
                    <div class="inline-flex  rounded-md ml-[rem] scale-125 shadow-sm mt-[2rem] " role="group">
                        <button type="button" 
                            children={<IoLogoTwitter className='ml-[.5rem]' />} class="outline-0 inline-flex items-center h-8 w-10 px-1 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"/>
                        <button type="button" 
                           children={<AiOutlineGithub className='ml-[.8rem]'  />} class=" inline-flex items-center  h-8 w-10 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"/>
                        <button type="button" 
                           children={<RiLinkedinFill className='ml-[.8rem]' />} class=" inline-flex items-center  h-8 w-10 py-1 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorsCard;