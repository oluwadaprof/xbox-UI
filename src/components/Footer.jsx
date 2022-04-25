import React from 'react'
import AuthorsCard from './AuthorsCard';
import Tobi from '../assets/tobi-removebg-preview.png';
import yourDesigner from '../assets/yourdesigner.jpeg';

function Footer() {
    return (
        <div className='bg-[#303030] backdrop-blur-3xl  ml-6 w-[78rem] h-[40rem]'>
            <p>Author</p>
            <div className='ml-[-4rem] mt-[2rem] inline-flex'>
                <AuthorsCard image={Tobi} role="Frontend Web Developer" color={`$[blue]`} name="ADEEKO TOBILOBA ISREAL" />
                <AuthorsCard image={yourDesigner} role="UI/UX Designer" name="DAVIO WHITE I." />
            </div>
        </div>
    )
}

export default Footer