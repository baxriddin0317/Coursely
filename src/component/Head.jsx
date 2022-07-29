import React from 'react'

function Head() {
  return (
    <div className='p-3 flex flex-col md:flex-row items-center justify-center space-x-3 bg-[#ededed]'>
        <p className='font-normal text-sm text-[#0f0f0f]'>
            A Webflow template for video courses.
        </p>
        <a href="/" className='text-[#d87775] font-normal text-sm'>
            See all templetes 
        </a>
    </div>
  )
}

export default Head