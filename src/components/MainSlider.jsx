import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftIcon from "../assets/Right.png";
import RightIcon from "../assets/left.png";
import HeroSlideImage from "./HeroSlideImage";
import firstImage from '../assets/FIFA22.png'
import secondImage from '../assets/bird.png'
import thirdImage from '../assets/Hnet.com-image3.png'

function MainSlider() {
    const settings = {
        centerPadding: "100px",
        infinite: true,
        slidesToShow: 1.6,
        centerMode: true,
        className: "center",
        dots: true,
        // autoplay: false,
        // speed: 10000,
        // autoplaySpeed: 2000,
        initialSlide: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <img className="right-icon" src={RightIcon} alt="right-icon" onClick={() => onClick()} />
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <img className="left-icon" src={LeftIcon} alt="left-icon" onClick={() => onClick()} />
        );
    }
    return (
        <div className="w-36 h-screen  top-40 right-0">
            <Slider className="" {...settings}>
                <HeroSlideImage Image={secondImage} />
                <HeroSlideImage Image={secondImage} />
                <HeroSlideImage Image={secondImage} />
                <HeroSlideImage Image={secondImage} />
                <HeroSlideImage Image={secondImage} />
                <HeroSlideImage Image={secondImage} />
                <HeroSlideImage Image={secondImage} />

            </Slider>
        </div>
    );
}

export default MainSlider;
