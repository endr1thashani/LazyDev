import React, { useEffect, useState } from 'react'
import { slides } from '../../../data';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import AOS from "aos";
import "aos/dist/aos.css";
import Dots from '../../../assets/images/dots.png';
const Testimonial = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const newIndex = (currentIndex - 1 + slides.length) % slides.length;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const newIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    
  return (
    <div className='max-w-[896px] h-[396px] w-full mr-[20px] md:m-auto px-6  group' data-aos="zoom-in" data-aos-duration="1200">
    <div className='w-full h-full bg-[#5a585c] rounded-md'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : 'hidden'}`}
        >
          <div className=' flex flex-col h-[200px] max-w-[654px] mx-auto mt-[100px]'>
          <div className='text-white text-[14px] px-[35px] md:text-[22px] md:px-0 font-semibold mt-[100px]'> {slide.text}</div>
          <div className='flex px-[35px] mt-[45px] md:px-0'>
              <div className='primary text-[14px] md:text-[20px] font-bold'>{slide.person}</div>
              <div className='text-white text-[14px] md:text-[20px] font-semibold'>- {slide.pos}</div>
          </div>
        </div>
        </div>
      ))}
    </div>
    <img className='absolute top-[-15px] left-[43px]' src={Dots} alt='dots' />
    <div className='absolute top-[43.5%] right-[9px] text-2xl p-2 text-white cursor-pointer bg-gradient-to-r from-[#00796D] to-[#38C682]'>
      <BsChevronCompactLeft onClick={prevSlide} size={32} />
    </div>
    <div className='absolute top-[55.6%]  right-[10px]  text-2xl p-2 text-black cursor-pointer bg-white'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'active' : ''}`}
        >
        </div>
      ))}
    </div>
  </div>
  )
}

export default Testimonial