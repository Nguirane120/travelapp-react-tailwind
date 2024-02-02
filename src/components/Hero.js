import React from 'react'
import heroVideo from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'
const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <video src={heroVideo} className='w-full h-full object-cover' autoPlay loop muted />
            <div className='absolute w-full h-full top-0 left-0  bg-gray-900/30'></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white'>
                <h1>First Class Travel</h1>
                <h2 className='py-3'>Top 1% Locations Worldwide</h2>
                <form action="" className='flex justify-between items-center max-w-[700px] mx-auto w-full p-1
                border rounded-md bg-gray-100/90'>
                    <div>
                        <input type="text" name="" placeholder='Search Destinations' 
                        className='bg-transparent focus:outline-none w-[300px] sm:w-[400px]' />
                    </div>
                    <div>
                        <button>
                            <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}} /> 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero