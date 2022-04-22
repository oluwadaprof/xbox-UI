import React from 'react'
// import Scorpion from "../assets/scorpion.png"

function TrendingCard( {image, data , index}) {
    
    return (
        <>
           <div key={index} className='w-[10rem] h-[15rem]  rounded-[4px] mt-[1rem] z-0 bg-[#303030] '>
                <img key={index} src={image} alt="scorpion" className="w-fit z-0 " />
                <div key={index} className='bg-[#303030] h-[2rem] w-[10rem] mt-[1rem] z-20 '>
                   {data}
                </div>
            </div>

        </>

    )
}

export default TrendingCard;