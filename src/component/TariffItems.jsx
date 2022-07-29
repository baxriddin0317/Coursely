import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

function TariffItems({data}) {
  return (
    <li className='bg-white w-11/12 sm:w-2/3 mb-10 lg:mb-0 sm:px-12 pt-12 pb-8 flex items-center flex-col justify-center'>  
        {data.icon}  
        <h2 className='text-[38px] text-center text-[#464646] mb-4 mt-3'>
            {data.title}
        </h2>
        <div className='flex mb-8 items-end space-x-1'>
            <span className='font-bold text-3xl text-[#017CFF]'>
                {data.price1}
            </span>
            <span className=' text-xl text-[#757575]'>
                {data.price2}
            </span>
        </div>
        <p className='text-[17px] px-5 text-center mb-3 text-[#464646]'>
            {data.text}
        </p>
        <button className='py-2 px-8 text-white text-[18px] bg-[#017cff] mb-14'>Get Access Now</button>
        <ul className='flex flex-col items-start '>
        {data.list.map(list => (
            <li key={list.id} className='flex items-center mb-2'>
                <AiOutlineCheck className="text-[#017CFF] text-2xl" />
                <span className='text-base'>{list.item}</span>
            </li>
        ))}
        </ul>
    </li>
  )
}

export default TariffItems