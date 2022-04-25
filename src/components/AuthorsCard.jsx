import React from 'react';


function AuthorsCard({ role, image, name, color }) {
    return (
        <div className=' ml-11 mt-10 inline-flex gap-x-[3rem] rounded-[4px] h-[13rem] w-[30rem] bg-[#252525] '>
            <img src={image} alt="tobi" className='rounded-[3px] h-[9rem] w-[7.9rem] ml-[2rem]  relative top-7  ' />
            <div className='mt-[2.2rem]'>
                <p className={`bg-${color}` }>{name}</p>
                <p className='text-white ml-1'>{role}r</p>
            </div>
        </div>
    )
}

export default AuthorsCard;