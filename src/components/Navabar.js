import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';


const Navabar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
        setLogo(!logo)
    }
    return (
        <div className='flex w-full justify-between items-center h-20 px-4 absolute text-white'>
            <div>
                <h1 onClick={handleNav} className={`${logo ? `hidden` :`block`}`}>BEACHES.</h1>

            </div>
            <ul className=' md:flex hidden'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex'>
            <BiSearch className='' size={20} />
            <BsPerson size={20} />
            </div>

            {/* ================================ MOBILE MENU ============================================*/}
            <div className='md:hidden z-10' onClick={handleNav}>
                {
                    nav ? <AiOutlineClose size={20}/> :  <HiOutlineMenuAlt4 size={20} className='text-black'/>

                }
            </div>

            <div onClick={handleNav} className={nav ? `${`absolute text-black left-0 top-0 bg-gray-100/90 w-full px-4 py-6 flex flex-col`}` : `absolute left-[-100%]`}> 
            <h1>BEACHES.</h1>

            <ul>
                <li className='border-b'>Home</li>
                <li className='border-b'>Destinations</li>
                <li className='border-b'>Travel</li>
                <li className='border-b'>View</li>
                <li className='border-b'>Book</li>
            </ul>
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>

            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
            </div>
            </div>
        </div>
    )
}

export default Navabar