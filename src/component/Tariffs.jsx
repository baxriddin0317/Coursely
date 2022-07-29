import React from 'react'
import { MdCollectionsBookmark } from "react-icons/md"
import { TbBooks } from "react-icons/tb"
import TariffItems from './TariffItems'

function Tariffs() {
    const tarrifsData = [
        {
            id: 1,
            title: "Essential",
            price1: "$189",
            price2: "$399",
            icon: <MdCollectionsBookmark className='text-[#B1B1B1] text-2xl' />,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            list: [
                {
                    id: 1,
                    item: "24 videos"
                },
                {
                    id: 2,
                    item: "1 month free access"
                },
                {
                    id: 3,
                    item: "Helpful templates and resources"
                },
                {
                    id: 4,
                    item: "All course updates for free"
                }
            ]
        },
        {
            id: 2,
            title: "Premium",
            price1: "$399",
            price2: "$899",
            icon: <TbBooks className='text-[#B1B1B1] text-2xl' />,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            list: [
                {
                    id: 1,
                    item: "24 videos"
                },
                {
                    id: 2,
                    item: "1 month free access"
                },
                {
                    id: 3,
                    item: "Helpful templates and resources"
                },
                {
                    id: 4,
                    item: "All course updates for free"
                },
                {
                    id: 5,
                    item: "Access to all future courses"
                },
                {
                    id: 6,
                    item: "1-on-1 help with the tutors"
                },
                {
                    id: 7,
                    item: "Monthly catch-ups"
                }
            ]
        },
    ]
  return (
    <section className='py-16 md:py-28 bg-[#E48D8B]'>
        <div className='max-w-[900px] mx-auto'>
            <h1 className='text-[37px] text-white mb-16 text-center'>It's Time to Start Your Podcast</h1>

            <ul className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-12'>
                {tarrifsData.map(data => (
                    <TariffItems data={data} key={data.id} />
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Tariffs