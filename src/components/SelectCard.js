import React from 'react'

const SelectCard = ({bg, text}) => {
  return (
    <div className='relative'>
        <img src={bg} alt="" className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'>
            <p className='absolute left-4 bottom-4 text-2xl text-white font-bold'>{text}</p>
        </div>
    </div>
  )
}

export default SelectCard