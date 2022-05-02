import React from 'react'


function HeroSlideImage({Image}) {

    // const  {index, ...props} = props;


    return (
        <div  className='rounded-full w-60% mx-4 -top-40 h-60% bg-white'>
                <img className='w-fit h-fit' src={Image} alt="" ></img>
                
            </div>  
    )
}

export default HeroSlideImage