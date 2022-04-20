import React from 'react'

function HeroSlideImage({image}) {
  return (
    <div >
        <img className='w-50 h-50 mx-4 ' src={image} alt="" />
    </div>
  )
}

export default HeroSlideImage