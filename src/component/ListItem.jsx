import React from 'react'

function ListItem({d}) {
  return (
    <>
        <li className='w-4/5 text-center mx-auto md:mx-0 md:text-left mb-8 md:mb-12 lg:mb-0'>
            {d.icon}
            {d.title && (
                <h2 className='text-xl md:text-2xl text-[#0f0f0f] mb-3'>
                {d.title}
                </h2>
            )}
            <p className="p ">
            {d.text}
            </p>
        </li>
    </>
  )
}

export default ListItem