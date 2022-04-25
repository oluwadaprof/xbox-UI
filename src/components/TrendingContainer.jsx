import React from 'react'
import RightIcon from "../assets/left.png";
import TrendingCard from './TrendingCard';
import Scorpion from '../assets/scorpion.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ForzaHorizon from '../assets/forzahorizon.png'
import Psyconauts from '../assets/Psychonauts_2_cover.png'
import Gears from '../assets/Gears_of_War_2_Game_Cover.png'
import Gta from '../assets/gta-online-the-contract-key-art.png'

function TrendingContainer() {
    const settings = {
        centerPadding: "100px",
        infinite: true,
        slidesToShow: 6,
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        initialSlide: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            // <img className="right-icon" src={RightIcon} alt="right-icon" onClick={() => onClick()} />
            <img src={RightIcon} className="absolute top-[-2.9rem] left-[70rem] scale-[10px] h-[1.2rem] w-[.7rem] " alt="right-icon" onClick={() => onClick()} />
        );
    }    
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            // <img className="right-icon" src={RightIcon} alt="right-icon" onClick={() => onClick()} />
            <img src={RightIcon} className="absolute top-[-2.9rem] left-[70rem] scale-[10px] h-[1.2rem] w-[.7rem] " alt="right-icon" onClick={() => onClick()} />
        );
    }
    return (
        <div className=' absolute left-[1rem]  top-[40rem]'>
            <div className='inline-flex gap-x-[70rem]'>
                <p className='text-white'>Trending</p>
                {/* <img src={RightIcon} className="scale-[10px] h-[1.2rem] w-[.7rem] " alt="right-icon" /> */}
            </div>

            <div className='absolute left-[-.1rem] top-[1rem] w-96  gap-20' >
                <Slider className="" {...settings}>
                    <TrendingCard image={Scorpion} data='Free+' />
                    <TrendingCard image={ForzaHorizon} data='installed' />
                    <TrendingCard image={Psyconauts} data='Free+' />
                    <TrendingCard image={Gta} data='Free+' />
                    <TrendingCard image={Gta} data='installed' />
                    <TrendingCard image={Scorpion} data='Free+' />
                    <TrendingCard image={Scorpion} data='Free+' />
                    <TrendingCard image={Scorpion} data='installed' />
                    <TrendingCard image={Scorpion} data='Free+' />
                </Slider>
            </div>

        </div>
    )
}

export default TrendingContainer;