const socialMedia = [
    {
        imgsrc: <AiOutlineGithub size={25}/> ,
        path: 'https://github.com/sIUzyy',
    },

    {
        imgsrc: <AiOutlineInstagram size={25}/> ,
        path: 'https://www.instagram.com/siuzy.web/',
    },

    {
        imgsrc: <AiOutlineLinkedin size={25}/> ,
        path: 'https://www.linkedin.com/in/justin-peligro-49a07b274/',
    },
]

import React from 'react'
import logo from '../assets/skylogo.png'

import { Link } from 'react-router-dom'
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {

    // this function will automatically scroll to the top of a website
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    
  return (
    <div className='main-container  bg-black'>

        <div className='main-col max-w-7xl mx-auto text-white py-12'>


            <div className='md:flex md:justify-between md:px-5 md:border-b md:border-gray-600 md:pb-2'>

            <div className=' flex items-center justify-center text-2xl md:-mt-7 '>
                <img src={logo} alt='' className='w-10 h-10 ' />
                <Link to='/' onClick={scrollToTop} className='font-nav tracking-widest text-1xl uppercase mx-2 text-[#414066]'>SkyCast</Link>
            </div>

            <div className='font-footer text-sm  uppercase text-center text-[#B7B7B7]  pt-3 md:text-left md:pt-0   '>
              <Link to='about' onClick={scrollToTop}>  <h1 className='hover:text-red-500 my-2 md:my-0 '>About</h1></Link>
              <Link to='https://openweathermap.org/api'><h1 className='hover:text-red-500 my-2 '>Api</h1></Link>
            </div>

           

            <div className='flex justify-center pt-3 text-[#B7B7B7] md:pt-0 '>
            {socialMedia.map((media) => (
                <>
                <Link className='px-2' to={media.path}>{media.imgsrc}</Link>
                </>
            ))}

            </div>

        </div>

        <div className='md:flex md:justify-between text-[#B7B7B7] md:px-5 md:pt-2'>

            <div className='text-center tracking-wider text-sm font-footer uppercase pt-3 '>
                <h1>Developed by: sIUzy</h1>
            </div>

            <div className='uppercase tracking-widest font-footer text-center pt-3 text-sm md:px-2 '>
                <h1>©2023 skycast. All right reserved</h1>
            </div>
        
        </div>

            </div>

            

        
        
        
    </div>
  )
}

export default Footer