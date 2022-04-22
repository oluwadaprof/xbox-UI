import React from 'react'


function HeroSlideImage({Image}) {
    return (
        <div className='rounded-full w-60% mx-4 h-60% bg-white'>
                <img className='w-fit h-fit' src={Image} alt="" />
            </div>  
    )
}

export default HeroSlideImage