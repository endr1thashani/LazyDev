import React, { useEffect } from 'react'
import {Tab , Tabs ,TabList, TabPanel } from 'react-tabs';
import hero from '../../../assets/images/back.png'
import { Link } from 'react-router-dom';
import { webContect } from '../../../data';
import { Swiper, SwiperSlide } from 'swiper/react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
const Content = () => {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

  return (
    <div className='flex flex-col mx-auto w-full mt-[100px] mb:mt-[340px] bg-[#40394A] h-screen min-h-[840px]' data-aos="fade-down" data-aos-duration="1200">
             <img className='w-full h-full object-cover relative' src={hero} alt='hero'/>
          <Tabs className="flex w-full h-screen flex-col cursor-pointer items-center absolute" >
            <h1 className='mt-[40px] text-white font-bold text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px]'>Our Project <span className='primary'>Projects</span></h1>
            <p className='text-[#B6B8BC] text-center p-[15px] text-[14px] md:text-[20px] font-medium'>Take a look at some of our recent projects and see how we've helped other businesses elevate their brand and drive business growth.</p>
          <TabList className='tablist flex h-[25px] items-start'>
            <Tab className='tab__content'>Web</Tab>
            <Tab  className='tab__content'>Mobile</Tab>
            <Tab className='tab__content'>UI / UX</Tab>
            </TabList>
            <TabPanel className='w-full flex items-center justify-center mt-[90px] md:mt-[60px]'>
            <Swiper
                breakpoints={{
                480: {
                    slidesPerView: 1,
                },
                550: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 3,
                    freeMode: true,
                },
                }}
                autoplay={{ delay: 3000 }}
                pagination={false}
                className="mySwiper w-full min-h-[510px]" data-aos="zoom-in" data-aos-duration="1200"
            >
            {
                webContect.map((item) => (
                    <SwiperSlide>
                        <div className='flex items-center justify-center mt-[20px] p-[15px]'>
                        
                        <div className='flex flex-col items-center max-w-[360px] p-[10px] bg-[#181D2A] rounded-[12px]'>
                            <img className='min-h-[320px] w-[98%] rounded-[12px]' src={item.foto} alt='foto'/>
                            <div className='m-[5px]'>
                                <h1 className='text-white font-bold my-[5px]'>{item.title}</h1>
                                <p className='text-[#B6B8BC] text-[14px] font-normal md:text-[16px]'>{item.text}</p>
                                <Link to='/projects'>
                                    <button className='my-[5px] primary text-[16px] font-semibold'>
                                        See More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                ))
            }
          </Swiper>
          </TabPanel>


            {/* Mobile */}
          <TabPanel className='w-full flex items-center justify-center'>
            <Swiper
                breakpoints={{
                480: {
                    slidesPerView: 1,
                },
                550: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 3,
                    freeMode: true,
                },
                }}
                autoplay={{ delay: 3000 }}
                pagination={false}
                className="mySwiper w-full min-h-[510px]" data-aos="zoom-in" data-aos-duration="1200"
            >
            {
                webContect.map((item) => (
                    <SwiperSlide>
                        <div className='flex items-center justify-center mt-[20px] p-[15px]'>
                        
                        <div className='flex flex-col items-center max-w-[360px] p-[10px] bg-[#181D2A] rounded-[12px]'>
                            <img className='min-h-[320px] w-[98%] rounded-[12px]' src={item.foto} alt='foto'/>
                            <div className='m-[5px]'>
                                <h1 className='text-white font-bold my-[5px]'>{item.title}</h1>
                                <p className='text-[#B6B8BC] text-[14px] font-normal md:text-[16px]'>{item.text}</p>
                                <Link to='/projects'>
                                    <button className='my-[5px] primary text-[16px] font-semibold'>
                                        See More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                ))
            }
          </Swiper>
          </TabPanel>


                      {/* UI / UX */}
                      <TabPanel className='w-full flex items-center justify-center'>
            <Swiper
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                    },
                    550: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                        freeMode: true,
                    },
                }}
                autoplay={{ delay: 3000 }}
                pagination={false}
                className="mySwiper w-full min-h-[510px]" data-aos="zoom-in" data-aos-duration="1200"
            >
            {
                webContect.map((item) => (
                    <SwiperSlide>
                        <div className='flex items-center justify-center mt-[20px] p-[15px]'>
                        
                        <div className='flex flex-col items-center max-w-[360px] p-[10px] bg-[#181D2A] rounded-[12px]'>
                            <img className='min-h-[320px] w-[98%] rounded-[12px]' src={item.foto} alt='foto'/>
                            <div className='m-[5px]'>
                                <h1 className='text-white font-bold my-[5px]'>{item.title}</h1>
                                <p className='text-[#B6B8BC] text-[14px] font-normal md:text-[16px]'>{item.text}</p>
                                <Link to='/projects'>
                                    <button className='my-[5px] primary text-[16px] font-semibold'>
                                        See More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                ))
            }
          </Swiper>
          </TabPanel>

          </Tabs>
    </div>
  )
}

export default Content