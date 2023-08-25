import React , { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { whatweDo } from '../../../data'
import hero from '../../../assets/images/back.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className='w-full h-screen max-h-[600px] max-w-[1240] mx-auto flex flex-col items-center mt-[40px] md:mt-[70px] mb-[40px]'>
        <h1 className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px] font-bold' data-aos="zoom-in" data-aos-duration="1200">The Services We Offer <span className='primary'>For</span> You</h1>

        <div className='flex w-full max-w-[1240px] flex-wrap mx-auto items-center justify-evenly mt-[30px] md:mt-[70px]'>
          {
            whatweDo.map((item) => (
              <div className='flex flex-col items-center justify-evenly w-[300px] h-[300px] bg-[#40394A] rounded-[15px] p-4 m-[20px] mb-[100px]' data-aos="zoom-out" data-aos-duration="1200">
                <img className='w-full h-screen object-cover relative' src={hero} alt='hero'/>
                <div className='flex items-center flex-col justify-evenly absolute h-[250px]'>
                <img className='w-[100px]' src={item.foto} alt='foto'/>
                <p className='para mt-[20px]'>{item.text}</p>
                <Link to='/services'>
                    <p className='primary font-bold text-[18px]'>Learn More</p>
                </Link>             
                </div>
              </div>
            ))
          }
        </div>

    </div>
  )
}

export default WhatWeDo