import React , { useEffect } from 'react'
import { banner } from '../../../data'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='w-full min-h-[561px] bg-[#38c68233] flex items-center justify-evenly flex-col mt-[700px] sm:mt-[800px] md:mt-[450px] lg:mt-[100px]'>
        <h1 className='text-[#0C111F] my-[20px] p-[5px] text-[20px] md:text-[44px] md:leading-[52px] md:my-[10px]  w-[90%] font-medium'  data-aos="zoom-in" data-aos-duration="1300" >
            We are passionate about helping businesses grow and succeed in the digital age. We take pride in our work and strive to exceed your expectations every time.
        </h1>
        <div className='w-[90%] p-[10px] bg-gradient-to-r from-[#00796D] to-[#38C682] rounded-[20px] flex items-center justify-evenly flex-wrap mb-[20px]' data-aos="zoom-in" data-aos-duration="1300">
            {
                banner.map((item) => (
                    <div className='flex flex-col items-center p-[32px]'>
                        <p className='text-white font-bold text-[48px] md:text-[52px] lg:text-[72px]'>
                            {item.nr}
                        </p>
                        <p className='text-white font-medium text-[16px] sm:text-[22px]'>
                            {item.text}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Banner