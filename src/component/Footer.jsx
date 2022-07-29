import React from 'react'
import Logo from "../assets/img/logo.png"

function Footer() {
  return (
    <footer className='bg-[#FBFBFB] py-16 md:py-24'>
        <div className="max-w-7xl mx-auto px-4 md:px-14 flex flex-col md:flex-row items-start justify-between">
            <div className='md:w-96 mb-12 md:mb-0'>   
                <img src={Logo} alt="logo" />
                <p className='text-lg text-[#0f0f0f] mt-[23px] mb-[13px]'>
                The last landing page you'll ever need to launch your next course
                </p>
                <span>
                Built by
                <a href="/">Nikolai Bain</a>
                Powered by
                <a href="/">Webflow</a>
                </span>
            </div>
            <ul className='flex justify-around w-full md:w-1/2 lg:w-1/3'>
                <li className='flex flex-col w-14 md:mr-28'>
                    <h3 className='uppercase mb-4 text-[#b1b1b1]'>SITE</h3>
                    <a href="/" className='capitalize text-sm text-[#0F0F0F] mb-2'>home</a>
                    <a href="/" className='capitalize text-sm text-[#0F0F0F] mb-2'>Contact</a>
                    <a href="/" className='capitalize text-sm text-[#0F0F0F] mb-2'>FAQs</a>
                    <a href="/" className='capitalize text-sm text-[#0F0F0F] mb-2'>Terms & Conditions</a>
                    <a href="/" className='capitalize text-sm text-[#0F0F0F] mb-2'>Privacy Policy</a>
                </li>
                <li className='flex flex-col '>
                    <h3 className='uppercase mb-4 text-[#b1b1b1]'>admin</h3>
                    <a href="/" className='capitalize text-sm text-[#0F0F0F] mb-2'>Style Guide</a>
                    <a href="/" className='capitalize text-sm text-[#0F0F0F] mb-2'>Licenses</a>
                    <a href="/" className='capitalize text-sm text-[#0F0F0F] mb-2'>Instructions</a>
                    <a href="/" className='capitalize text-sm text-[#0F0F0F] mb-2'>Password</a>
                    <a href="/" className='capitalize text-sm text-[#0F0F0F] mb-2'>404</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer