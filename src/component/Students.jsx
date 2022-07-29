import React from 'react'
import StudentsItem from './StudentsItem'
import { StudentsBase } from '../assets/base/StudentsBase'

function Students() {
  return (
    <section className='py-16 md:py-24'>
        <div className="max-w-7xl mx-auto px-4 md:px-14">
            <h1 className='text-center text-[#0f0f0f] mb-12 text-[38px] font-bold'>
            More Praise From our Students
            </h1>
            <ul className='flex justify-between xl:justify-start xl:flex-col flex-wrap xl:h-[760px]'>
              {StudentsBase.map(s => (
                 <StudentsItem key={s.id} data={s} />
              ))}
            </ul>
        </div>
    </section>
  )
}

export default Students