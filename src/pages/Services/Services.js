import React , { useEffect } from 'react'
import { Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';


import saly from '../../assets/images/Saly.png'
import mac from '../../assets/images/mac.png'
import pwa from '../../assets/images/pwa.png'
import sketch from '../../assets/images/sketch.png'
const Services = () => {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className='w-full max-w-[1240px] mx-auto items-center mt-[40px]'>

      <div className='w-full flex items-center justify-between flex-col p-[10px]'>
        <div className='flex flex-col p-[5px] items-center mb-[20px]' data-aos='zoom-in' data-aos-duration='1200'>
          <h1 className='font-bold text-[20px]  md:text-[52px] my-[20px]'>User experience is <span className='primary'>Our Priority</span></h1>
          <p className='s-text text-center leading-7'>We create user experience with accessibility in mind.<br/>We are here to give modern solutions to the modern problems.</p>
          <Link to='/contact'>
            <button className='btn'>Make it Happen</button>
          </Link>
        </div>
        <img data-aos='zoom-in' data-aos-duration='1200' src={saly} alt='saly'/>
      </div>

      <div className='w-full flex items-center justify-between flex-col p-[5px] sm:flex-col md:flex-row mt-[70px]'>
        <div className='flex flex-col p-[5px] max-w-[500px]' data-aos='zoom-in' data-aos-duration='1200'>
          <h1 className='text-[#454749] font-bold text-[20px]  md:text-[40px]'>Web Development</h1>
          <p className='primary text-[16px] font-bold my-[10px]'>Website and Web App Development</p>
          <p className='s-text'>A website is something that gives you and your buisness a Web presence. Here at <span className='primary'>LezyDev</span>, We exactly take care of that.</p>
          <Link to='/contact'>
            <button className='btn'>Make it Happen</button>
          </Link>
        </div>
        <img data-aos='zoom-in' data-aos-duration='1200' src={mac} alt='web'/>
      </div>


      <div className='w-full flex items-center justify-between flex-col p-[5px] sm:flex-col md:flex-row mt-[70px]'>
        <img src={pwa} alt='mobile ' data-aos='zoom-in' data-aos-duration='1200' />
        <div className='flex flex-col p-[5px] max-w-[500px]' data-aos='zoom-in' data-aos-duration='1200' >
          <h1 className='text-[#454749] font-bold text-[20px] md:text-[40px]'>Progressive Mobile Apps</h1>
          <p className='primary text-[16px] font-bold my-[10px]'>Progressive app development</p>
          <p className='s-text'>Progressive apps are the futre of Modern web and We understand that as We’ve been working with those.</p>
          <Link to='/contact'>
            <button className='btn'>Make it Happen</button>
          </Link>
        </div>
      </div>

      <div className='w-full flex items-center justify-between flex-col p-[10px] sm:flex-col md:flex-row mt-[70px]'>
        <div className='flex flex-col p-[5px] max-w-[500px]' data-aos='zoom-in' data-aos-duration='1200'>
          <h1 className='text-[#454749] font-bold text-[20px] md:text-[40px]'>User interface Design</h1>
          <p className='primary text-[16px] font-bold my-[10px]'>UI / UX design</p>
          <p className='s-text'>As a Design focused digital agency we are highly concerned about the overall product design.</p>
          <Link to='/contact'>
            <button className='btn'>Make it Happen</button>
          </Link>
        </div>
        <img src={sketch} alt='sketch' data-aos='zoom-in' data-aos-duration='1200' />
      </div>
      
      
    </div>
  )
}

export default Services