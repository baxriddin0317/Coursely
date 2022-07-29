import React from 'react'
import ListItem from './ListItem'

function Course({data}) {
  return (
    <section className='py-16 md:py-24'>
        <div className="max-w-7xl mx-auto px-4 md:px-14">
            <h1 className='text-3xl md:text-4xl font-bold text-[#0f0f0f] mb-16'>
                By the end of the 4-week course...
            </h1>
            <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 gap-y-16'>
                {data.map(d => (
                    <ListItem d={d} key={d.id} />
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Course