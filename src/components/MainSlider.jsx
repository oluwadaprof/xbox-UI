import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlideImage from "./HeroSlideImage";
import firstImage from '../assets/FIFA22.png'
import secondImage from '../assets/bird.png'
import thirdImage from '../assets/gow big.png'

function MainSlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        dots: true
    };
    return (
        <div className="w-90 h-screen top-40 right-0">
            <Slider {...settings}>
                <HeroSlideImage image={firstImage} />
                <HeroSlideImage image={secondImage} />
                <HeroSlideImage image={thirdImage} />
                <HeroSlideImage image={secondImage} />
                <HeroSlideImage image={thirdImage} />
                <HeroSlideImage image={secondImage} />
                <HeroSlideImage image={thirdImage} />
            </Slider>
        </div>
    );
}

export default MainSlider;
