import React from 'react'
import Img from "../assets/img/qoshtirnoq.png"
import Jamie from "../assets/img/jamie.jpg"

function Esse() {
  return (
    <section className='py-16 md:py-24 bg-[#194677]'>
        <div className="max-w-7xl mx-auto text-center flex justify-center">
            <div className='w-[90%] md:w-1/2 mx-auto'>
                <img className='mx-auto mb-6' src={Img} alt="img" />
                <p className='italic text-white text-2xl'>
                    At some point you have to say, damn, they shouldn't be giving out all the info I'm learning, it's too much of a shortcut.
                    <span className='text-[#E48D8B]'> And yet, there is all it, packaged up in an amazing course.</span>
                </p>

                <div className='flex items-center flex-col justify-center mt-7'>
                    <img src={Jamie} alt="jamie" className='rounded-full' />
                    <h3 className='capitalize text-white text-[17px] mt-2'>Jamie matthew</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Esse