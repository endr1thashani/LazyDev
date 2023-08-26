import React from 'react'
import { Link } from 'react-router-dom'
import { BiMailSend } from 'react-icons/bi'
import { FiFacebook , FiTwitter , FiInstagram } from 'react-icons/fi'
import arrow from '../../assets/icons/aright.svg'
import logo from '../../assets/images/lazydev.svg'
const Footer = () => {
  return ( 
    <div className='mt-[150px] w-full p-[10px] bg-[#40394A] flex flex-col items-center'>
        
        <div className='flex flex-col items-center justify-evenly w-full'>

          {/*TOP SECTION*/}
          <div className='flex flex-col items-center justify-evenly w-full'>

            <div className='flex items-center justify-evenly flex-wrap mt-[10px] w-full max-w-[80%] md:max-w-[86%]'>
                <h1 className='text-white font-semibold text-[18px] sm:text-[25px] md:text-[34px] lg:text-[44px]'>Let’s bring your vision to life.</h1>
                <Link to='/contact' className='mb-[20px]'>
                  <button className='btn mb-[10px] md:mb-[30px]'>Let's Talk <img src={arrow} alt='arrow'/></button>
                </Link>
            </div>

            <div className='line'></div>
          </div>

          {/*MIDDLE SECTION*/}
          <div className='flex items-center justify-evenly flex-wrap w-full min-h-[300px]'>
              <div className='flex flex-col items-start max-w-[350px] mt-[45px] sm:mt-[20px] md:mt-0'>
                <Link to='/'>
                    <img className='w-[130px] mb-[20px] leading-7 font-normal' src={logo} alt='logo' />
                </Link>

                <p className='text-[#B6B8BC] text-[14px] md:text-[18px]'>We're a team of experienced designers, developers, and marketers, passionate about delivering exceptional digital solutions.</p>

                <a href="mailto:hr@lazydev.com" className='flex items-center text-[#B6B8BC] text-[14px] md:text-[18px] my-[20px] hover:text-[#38C682]'><BiMailSend className='mr-[3px]'/> hr@lazydev.com</a>
              </div>


              <div className='flex sm:items-center justify-evenly flex-wrap flex-col items-start sm:flex-row'>
                <div className='flex flex-wrap w-[300px] justify-between'>
                  <ul>
                  <h1 className='menu'>Menu</h1>
                    <li className='list'>
                      <Link>Home</Link>
                    </li>
                    <li className='list'>
                      <Link>Services</Link>
                    </li>
                    <li className='list'>
                      <Link>Projects</Link>
                    </li>
                    <li className='list'>
                      <Link>Contact</Link>
                    </li>
                </ul>

                <ul>
                  <h1 className='menu'>Support</h1>
                    <li className='list'>
                      <Link>FAQ</Link>
                    </li>
                    <li className='list'>
                      <Link>Privacy Policy</Link>
                    </li>
                    <li className='list md:mb-[40px]'>
                      <Link>Terms of Service</Link>
                    </li>
                </ul>
                </div>

                <div className='mx-[25px] mt-[30px] ml-0 sm:mx-0 md:ml-[25px] sm:mt-0'>
                  <ul>
                    <h1 className='menu mb-[20px]'>Social Media</h1>
                    <div className='flex items-center mb-[120px]'>
                      <li>
                          <a href='http://www.facebook.com'>
                            <FiFacebook className='icon' size={35}/>
                          </a>
                        </li>
                        <li className='mx-[20px]'>
                        <a href='http://www.twitter.com'>
                            <FiTwitter className='icon' size={35}/>
                          </a>
                        </li>
                        <li>
                        <a href='http://www.instagram.com'>
                            <FiInstagram className='icon' size={35}/>
                          </a>
                        </li>
                    </div>
                  </ul>
                </div>
              </div>
          </div>


            {/*BOTTOM SECTION*/}
            <div className='flex flex-col items-center w-full justify-around mt-[-60px] md:mt-0'>
              <div className='line'></div>  

              <p className='text-[#B6B8BC] text-[14px] md:text-[18px] mt-[40px] sm:mt-[50px] mb-[20px]'>
                Copyright © 2023 by LazyDev. All rights reserved.
              </p>     
            </div> 


        </div>
      </div>
  )
}

export default Footer