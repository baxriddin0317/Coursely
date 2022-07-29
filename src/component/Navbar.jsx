import React, { useState } from 'react'
import Logo from "../assets/img/logo.png"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

function Navbar() {
  const [ btn, setBtn ] = useState(true);

  // hymbergur btn onclick event
  const handleBtn = () => {
    setBtn(!btn);
  }
  return (
    <header className='py-6'>
        <div className='max-w-7xl px-2 md:px-14 flex justify-between items-center'>
            {/* logo */}
            <a href="/">
                <img src={Logo} alt="logo" />
            </a>

            <span className='uppercase text-xs md:text-[15px] text-[#757575] hidden md:flex'>
            LAUNCH A SUCCESSFUL PODCAST
            </span>

            <button className='hidden md:flex btn px-5 py-1'>
                Encroll now
            </button>
                    {/* humburger button */}
            <button className='flex items-center justify-center md:hidden' onClick={handleBtn}>
              {btn ? <AiOutlineMenu className='text-2xl' />
                : <AiOutlineClose className="text-2xl" />}
            </button>
        </div>

        {/* mobile menu */}
        <nav className={`bg-white md:hidden fixed z-50 top-0 w-4/5 pt-24 pb-5 px-9 h-full duration-700 ${btn ? "-left-full" : "left-0"}`}>

          {/* logo */}
          <a href="/" >
            <img src={Logo} alt="logo" />
          </a>

          <ul className='flex flex-col items-center mt-20'>
            <li className='mb-7' onClick={handleBtn}> 
              <a href="/" className='text-lg' >Home</a> 
            </li>
            <li className='mb-7' onClick={handleBtn}> 
              <a href="/contact" className='text-lg' >Contact</a> 
            </li>
            <li className='mb-7' onClick={handleBtn}> 
              <a href="/faq"  className='text-lg' >FAQs</a> 
            </li>
            <li className='mb-7'  onClick={handleBtn}> 
              <a href="/terms" className='text-lg' >Terms & Conditions</a> 
            </li>
            <li className='mb-7' onClick={handleBtn}> 
              <a href="/privacy" className='text-lg' >Privacy Policy</a> 
            </li>
            <li onClick={handleBtn}>
              <button className='mx-auto btn px-5 py-1'>
                  Encroll now
              </button>
            </li>
          </ul>
        </nav>


    </header>
  )
}

export default Navbar