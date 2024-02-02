import React from 'react'
import heroVideo from '../assets/beachVid.mp4'
const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <video src={heroVideo} className='w-full h-full object-cover' autoPlay loop muted/>
    </div>
  )
}

export default Hero