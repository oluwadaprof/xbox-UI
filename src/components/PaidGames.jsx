import React from 'react'
import TrendingCard from './TrendingCard';
import Scorpion from "../assets/scorpion.png"

function PaidGames() {
    return (
        <div className='text-white mt-[50rem] w-[83rem] h-[45rem]'>
            <p className='text-white ml-[-74rem] mt-[-37rem]'> Top Paid Games</p>
            <div className='inline-flex ml-4 flex-wrap  gap-x-[3.8rem] gap-y-10'>
            <TrendingCard image={Scorpion} /> 
            <TrendingCard image={Scorpion} /> 
            <TrendingCard image={Scorpion} /> 
            <TrendingCard image={Scorpion} /> 
            <TrendingCard image={Scorpion} /> 
            <TrendingCard image={Scorpion} /> 
            <TrendingCard image={Scorpion} /> 
            <TrendingCard image={Scorpion} /> 
            <TrendingCard image={Scorpion} /> 
            <TrendingCard image={Scorpion} />
            <TrendingCard image={Scorpion} /> 
            <TrendingCard image={Scorpion} />  
            </div>
            
        </div>
    )
}

export default PaidGames;