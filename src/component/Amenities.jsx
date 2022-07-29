import React from 'react'
import propTypes from "prop-types"
import { TbMicrophone2 } from "react-icons/tb"
import { MdOutlineGroups } from "react-icons/md"
import { GiTwoCoins } from "react-icons/gi"
import ListItem from './ListItem'


function Amenities() {
    const data = [
        {
            id: 1,
            icon: <TbMicrophone2  className='text-[#017CFF] text-3xl lg:mx-0 mx-auto mb-4' />,
            title: "Learn what the best gear is and where to get it",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            icon: <MdOutlineGroups className='text-[#017CFF] text-3xl mb-4 lg:mx-0 mx-auto' />,
            title: "How to find guests for your episodes",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 3,
            icon: <GiTwoCoins className='text-[#017CFF] text-3xl mb-4 mx-auto lg:mx-0' />,
            title: "And how to finally make some money",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
  return (
    <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 md:px-14'>
            <ul className='flex flex-wrap lg:flex-nowrap items-center justify-center lg:items-start lg:justify-between lg:space-x-16'>
                {data && data.map(d => (
                    <ListItem d={d} key={d.id} />
                ))}
            </ul>
        </div>
    </section>
  )
}

Amenities.propTypes ={
    data: propTypes.array
}

export default Amenities