import React from 'react'
import {AiTwotoneStar} from "react-icons/ai"

function StudentsItem({data}) {
  return (
    <li className='md:w-[49%] xl:w-[355px] p-8 bg-[#EDEDED] mb-8'>
        <div className='flex items-center mb-6'>
            <AiTwotoneStar className='text-[#E48D8B]' />
            <AiTwotoneStar className='text-[#E48D8B]' />
            <AiTwotoneStar className='text-[#E48D8B]' />
            <AiTwotoneStar className='text-[#E48D8B]' />
            <AiTwotoneStar  className='text-[#E48D8B]' />
        </div>
        <p className='text-base text-[#0f0f0f] mb-3.5'>
        {data.text}
        </p>
        <div className='flex items-center space-x-4'>
            <img className='rounded-full w-12 h-12' src={data.img} alt="" />
            <h3 className='text-sm text-[#0f0f0f]'>{data.name}</h3>
        </div>
    </li>
  )
}

export default StudentsItem