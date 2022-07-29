import React from 'react'

function Included() {

    const includ = [
        {
            id: 1,
            num: 6,
            text: "Chapters"    
        },
        {
            id: 2,
            num: "56+",
            text: "Podcast Ideas"    
        },
        {
            id: 3,
            num: 28,
            text: "Videos"    
        },
        {
            id: 4,
            num: 4,
            text: "Free Resources"    
        },
        {
            id: 5,
            num: '$8k',
            text: "Worth of Value"    
        }
    ]

  return (
    <section className='bg-[#017CFF] py-24 text-white'>
        <div className="max-w-7xl mx-auto px-4 md:px-14">
            <h1 className='capitalize text-center text-3xl md:text-4xl mb-12'>
                What's included
            </h1>

            {includ && <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                {includ.map(i => (
                    <li key={i.id} className="flex flex-col items-center mb-8 lg:mb-0 justify-center">
                        <h1 className='font-bold text-[80px] text-white'>{i.num}</h1>
                        <p>{i.text}</p>
                    </li>
                ))}
            </ul>}
        </div>
    </section>
  )
}

export default Included