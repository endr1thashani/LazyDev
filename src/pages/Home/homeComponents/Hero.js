import React , { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Items from './Items'
import hero from '../../../assets/images/back.png'
import arrow from '../../../assets/icons/aright.svg'
const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='flex flex-col w-full items-center  bg-[#40394A] h-screen min-h-[840px]'>
      <img className='w-full h-screen object-cover' src={hero} alt='hero'/>
      <div className='flex flex-col items-center justify-center w-full md:max-w-[920px] px-[15px] md:px-0 absolute mt-[20px] '>
        <div className='px-[12px] py-[16px] bg-gray-700 rounded-full' data-aos="zoom-in" data-aos-duration="1200">
          <h1 className='text-white text-[14px] font-bold'>NUMBER ONE CREATIVE DIGITAL AGENCY</h1>
        </div>
        <div className='flex flex-col items-center' data-aos="zoom-out" data-aos-duration="1200" >
          <h1 className='text-[36px] sm:text-[46px] md:text-[72px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00796D] to-[#38C682] md:mb-[-30px]'>Smart Choices</h1>
          <h1 className='text-white text-[30px] sm:text-[46px] md:text-[72px] font-bold'>For Your Business Growth</h1>
          <p className='text-center text-[#B6B8BC] text-[14px] md:text-[20px] font-medium mt-[10px]'>We're a team of experienced designers, developers,<br/> and marketers, passionate about delivering exceptional digital solutions.</p>
        </div>
        <Link to='/contact'>
          <button className='btn' data-aos="zoom-in" data-aos-duration="1200">
            Contact Us <img src={arrow} alt='arrow'/>
          </button>
        </Link>
        <Items/>
      </div>
    </div>
  )
}

export default Hero