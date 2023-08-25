import React,{ useState , useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data'
import Logo from '../../assets/images/lazydev.svg'
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Line } from 'react-icons/ri'


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [bg, setBg] = useState(false)
  
    useEffect(()=>{
      window.addEventListener('scroll' , ()=>{
        return window.scrollY > 50 ? setBg(true) : setBg(false)
      })
    })

    const handleNav = () => {
      setNav(!nav);
    };

    const closeNav = () => {
      setNav(false);
    };


  
  return <header  className={`${bg ? ' bg-[#40394A] lg:py-6' : 'bg-[#40394A]   py-2 lg:py-4]'} sticky px-4 md:px-[140px] justify-between m-auto top-0 z-50 flex items-center h-20`}>
      <div className="flex w-full ">
          <div className='flex w-full items-center justify-between'>
            
                <NavLink to="/" className='text-[30px] md:text-[40px] font-bold'><img src={Logo} className='w-[100px] md:w-[150px]' alt="logo"/></NavLink>

                    <ul className='hidden md:flex decoration-none text-black gap-x-10 text-base font-bold '>
                          {
                            navLinks.map((link,index) => <li key={index}>
                              <NavLink 
                                  to={link.path} 
                                  className={navClass => navClass.isActive ? 
                                  'text-[#38C682] border-b-2 border-[#38C682] text-[18px] leading-7 font-[500] ' 
                                  : 'text-[#fff] text-[18px] leading-7 font-[500] hover:text-[#38C682] hover:border-b-2 border-[#38C682]'}>
                                    {link.display}
                                </NavLink>
                            </li>)
                          }
                    </ul>

                <div onClick={handleNav} className='block md:hidden cursor-pointer text-white'>
                          {nav ? <AiOutlineClose size={21} /> : <RiMenu3Line size={21} />}
                </div>
                <div    
                  className={
                    nav
                      ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#40394A]  ease-in-out duration-500 md:hidden'
                      : 'ease-in-out duration-500 fixed left-[-100%]'
                  }
                  >
                    <ul className='p-4 mt-[20px]'>
                    <NavLink to="/" className='text-[30px] md:text-[40px] font-bold text-black'><img src={Logo} className='w-[100px] md:w-[150px]' alt="logo"/></NavLink>
                          {
                            navLinks.map((link,index) => <li className='mt-[25px]' key={index}>
                              <NavLink 
                                  onClick={closeNav}
                                  to={link.path} 
                                  className={navClass => navClass.isActive ? 
                                  'text-[#38C682]  text-[18px] leading-7 font-[700]' 
                                  : 'text-[#fff] text-[18px] leading-7 font-[700] hover:text-[#38C682]'}>
                                    {link.display}
                                </NavLink>
                            </li>)
                          }
                    </ul>
                </div>
          </div>
      </div>
  </header>
}

export default NavBar