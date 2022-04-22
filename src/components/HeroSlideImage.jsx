import React from 'react'


function HeroSlideImage({Image}) {
    return (
        <div className='rounded-full w-60% mx-4 h-60% bg-white'>
                <img className='w-fit h-fit' src={Image} alt="" />
            </div>  

        // <div className="bg-cover bg-center" style="background-image: url('hero-pattern')" ></div>
        // <img className='w-50 h-50 mx-4 rounded-[4px] p-200 pr-[5rem] ' src={secondImage} alt="" />
        // <img className='w-50 h-50 mx-4 rounded-[4px] p-200 pr-[5rem] ' src={thirdImage} alt="" />
        // <img className='w-50 h-50 mx-4 rounded-[4px] p-200 pr-[5rem] ' src={firstImage} alt="" />
        // <img className='w-50 h-50 mx-4 rounded-[4px] p-200 pr-[5rem] ' src={secondImage} alt="" />
        // <img className='w-50 h-50 mx-4 rounded-[4px] p-200 pr-[5rem] ' src={thirdImage} alt="" />
    )
}

export default HeroSlideImage