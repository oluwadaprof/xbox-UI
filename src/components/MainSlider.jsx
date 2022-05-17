import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftIcon from "../assets/Right.png";
import RightIcon from "../assets/left.png";
import HeroSlideImage from "./HeroSlideImage";
// import firstImage from '../assets/FIFA22.png'
import secondImage from '../assets/bird.png'
// import thirdImage from '../assets/Hnet.com-image3.png'

function MainSlider() {
//     const slider = useRef();
// const slideElement = slider.current.innerSlider.list.querySelector(`[data-index="${3}"]`);


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
        // const { className, onClick } = props;
        return (
            <img className="right-icon" src={RightIcon} alt="right-icon"  />
        );
    }

    function SamplePrevArrow(props) {
        // const { className, onClick } = props;
        return (
            <img className="left-icon" src={LeftIcon} alt="left-icon"  />
        );
    }
    return (
        <div className="w-36 h-screen -mt-[4rem]  right-0">
            {/* <div className="w-[22.9rem] z-10 h-[22.9rem] opacity-60 top-[6.7rem] bg-black absolute" >

            </div> */}
            <p className="text-white relative top-[21rem] w-max font-home-font scale-[14rem] text-4xl left-[38rem] z-10">Halo Guest Pack</p>
            <p className="text-white relative top-[24rem] w-max font-home-font scale-[14rem] left-[40rem] z-10">Play the updated version</p>
            <Slider  className="" {...settings}>
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
