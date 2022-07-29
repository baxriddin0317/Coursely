import React from 'react'

function Section({data}) {

  return (
    <section className='py-16 md:py-24'>
        <div className={`max-w-7xl mx-auto px-4 md:px-14 flex justify-between items-center ${data.reverse && 'md:flex-row-reverse'}`}>
            <div className='w-1/2 hidden lg:flex'>
                <img src={data.img} className="w-full " alt="img" />
            </div>
            <div className='lg:w-2/5'>
                <h2 className='font-bold text-center md:text-left text-3xl lg:text-4xl text-[#0f0f0f] mb-[18px]'>
                    {data.title}
                </h2>
                <img src={data.img} className="w-full my-6 flex lg:hidden" alt="img" />
                <p className="p">
                    {data.text}
                </p>
            </div>
        </div>
    </section>
  )
}

export default Section