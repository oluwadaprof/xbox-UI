import React from 'react'
import AuthorsCard from './AuthorsCard';
import Tobi from '../assets/tobi-removebg-preview.png';
import yourDesigner from '../assets/yourdesigner.jpeg';

function Footer() {
    return (
        <div className='bg-[#303030] backdrop-blur-3xl  ml-6 w-[78rem] h-[40rem]'>
            <p className='font-home-font animate-pulse text-white font-extrabold p-10 mb-[-4rem] -ml-3 text-[1.5rem]' >Author</p>
            <div className='ml-[-4rem] mt-[2rem] inline-flex'>
                <AuthorsCard image={Tobi} role="Frontend Web Developer" color={`$[blue]`} name="ADEEKO TOBILOBA ISREAL" />
                <AuthorsCard image={yourDesigner} role="UI/UX Designer" name="DAVIO WHITE I." />
            </div>
            <hr className='relative top-[15rem]' />
            <div className='flex center  gap-x-40 mt-[16rem] ' >

                <p className='  text-white ml-60 italic'>
                    Terms of use | Privacy Environmental Policy
                </p>

                <p className='text-white text-bold' >
                    Copyright @ xbox, All rights reserved.
                </p>

            </div>

        </div>
    )
}

export default Footer