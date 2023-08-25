import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Icon1 from '../../../assets/icons/icon1.png';
import Icon2 from '../../../assets/icons/icon2.png';
import Icon3 from '../../../assets/icons/icon3.png';
import Icon4 from '../../../assets/icons/icon4.png';
import shape from '../../../assets/images/Shape.png';

SwiperCore.use([Autoplay]);

const Items = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex mx-auto w-full items-center justify-center mt-[150px]">
        <img className='px-[20px] md:px-0 w-full h-screen max-h-[304px] absolute' src={shape} alt='shape' data-aos="zoom-in" data-aos-duration="1200"/>
      <Swiper
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            freeMode: true,
          },
        }}
        autoplay={{ delay: 3000 }}
        pagination={false}
        className="mySwiper w-full " data-aos="zoom-in" data-aos-duration="1200"
      >
        <SwiperSlide >
            <div className='flex flex-col items-center justify-center'>
                <img className='w-[88px] h-[88px]' src={Icon1} alt='as' />
                <p className='para'>Expanding the Market</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col items-center justify-center'>
                <img className='w-[88px] h-[88px]' src={Icon2} alt='as' />
                <p className='para'>Cost-Effective</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col items-center justify-center'>
                <img className='w-[88px] h-[88px]' src={Icon3} alt='as' />
                <p className='para'>More Professional</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col items-center justify-center'>
                <img className='w-[88px] h-[88px]' src={Icon4} alt='as' />
                <p className='para'>Attract Clients</p>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
  );
};

export default Items;