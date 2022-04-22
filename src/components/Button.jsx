import React from 'react'

function Button() {
    const buttonNames = ['ALL PC GAMES', 'TOP PAID', 'ADD ONS', 'REDEEM', 'WHITELIST']


    return (
        <div className='inline-flex flex-row scale-50 absolute h-36 top-[400px] right-[230px]  mt-54 gap-10' >
            {buttonNames.map(names => <button type='button' className="btn rounded-[7px] text-white bg-[#303030] w-56 h-20 mt-20 px-5 py-2 ">
                {names}
            </button>)}
        </div>

    )
}

export default Button;