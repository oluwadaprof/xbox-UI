import React from 'react'
import Slider from "react-slick";

function MainSlider () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='relative top-40 right-0'>
        <Slider {...settings}>
          <div className='bg-white w-20 h-20'>
            <h3>1</h3>
          </div>
          
        </Slider>
        </div>
  )
}

export default MainSlider;