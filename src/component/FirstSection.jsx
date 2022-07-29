import React from 'react'
import Img from "../assets/img/img-1.jpg"
import {BiPlay} from "react-icons/bi"
function FirstSection() {
  return (
    <section className='py-24 md:py-32'>
        <div className="max-w-7xl mx-auto px-4 md:px-14 flex justify-between items-center">
            <div className='lg:w-2/5 flex flex-col items-center justify-center lg:block'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl text-[#0f0f0f] mb-4'>
                    Learn How To Launch a Successful Podcast
                </h1>
                <div className='flex lg:hidden my-4'>
                    <img src={Img} alt="" />
                </div>
                <p className='p mb-3 w-full'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='flex mb-8 items-end space-x-1 '>
                    <span className='font-bold text-3xl text-[#0f0f0f]'> $189</span>
                    <span className=' text-xl text-[#757575] line-through'>$399</span>
                </div>
                <div className='flex flex-col sm:flex-row items-center sm:space-x-2'>
                    <button className='btn mb-2 sm:mb-0 py-2 px-6 md:px-8'>ernoll now</button>
                    <button className='flex items-center py-2 px-6 md:px-8 bg-[#ededed] capitalize text-[#757575]'> <BiPlay className='text-xl' />watch trailer</button>
                </div>
            </div>

            <div className='hidden lg:flex'>
                <img src={Img} alt="" />
            </div>
        </div>
    </section>
  )
}

export default FirstSection