import React , { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
import { BsBuildings } from 'react-icons/bs'
import { GrMapLocation } from 'react-icons/gr'
import { FiPhoneCall } from 'react-icons/fi'
const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dpx036m', 'template_79hot7b', form.current, 'ciiats1rLgh12Kc4o')
      .then((result) => {
          console.log(result.text);
          toast.success('Message Sent!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <div className='flex w-full mx-auto max-w-[1240px] items-center justify-evenly flex-col md:flex-row mt-[60px]'>
      <form ref={form} onSubmit={sendEmail} className='min-w-[300px] max-w-[400px] p-[20px] '>
        <div className='flex flex-col'>
          <label htmlFor="name">Name:</label>
          <input type='text' name='name' id='name' placeholder='Your Name' required />
        </div>
        <div className='flex flex-col my-[30px]'>
          <label htmlFor="email">Email:</label>
          <input type='email' name='email' id='email' placeholder='Your Email' required />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="message">Message:</label>
          <textarea type='text' name='message' id='message' placeholder='Your Message' required >

          </textarea>
        </div>

        <button 
        className='flex items-center justify-center px-[15px] py-[9px] md:px-[12px] md:py-[9px] mt-[30px] text-[14px] md:text-[18px] rounded-md text-white bg-gradient-to-r from-[#00796D] to-[#38C682] hover:bg-[#98f1e9]'>
          Send 👋 
        </button>
      </form>

      <div className='flex flex-col mt-[30px] items-center md:mt-0'> 
        <div className='flex flex-col items-center'>
          <div className='flex items-center justify-center p-[5px] rounded-md bg-gray-200'>
            <BsBuildings size={50}/>
          </div>
          <p className='mt-[5px] text-[12px] md:text-[14px] font-bold'>LazyDev LLC</p>
        </div>
        <div className='flex flex-col items-center my-[40px]'>
          <div className='flex items-center justify-center p-[5px] rounded-md bg-gray-200'>
            <GrMapLocation size={50} />
          </div>
          <a className='text__contact' href='/'>SILVER LAKE, United States 1941</a>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center justify-center p-[5px] rounded-md bg-gray-200'>
            <FiPhoneCall size={50} />
          </div>
          <a className='text__contact' href='tel:+38344222333'>044222333</a>
        </div>
      </div>


    </div>
  )
}

export default Contact