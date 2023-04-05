import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin,} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import Logo from '../assets/logo.png';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed z-40 w-full h-[80px] flex justify-between items-center px-4 bg-[#323232] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: '120px' }}/>
      </div>

      {/* Menu */}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
    

      {/* Hamburguer */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#424242] flex flex-col justify-center items-center'}>
        <div>
          <img src={Logo} alt="Logo Image" style={{ width: '120px' }} />
        </div>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className=' hidden lg:flex fixed flex-col top-[35%] left-0 gap-8'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#44cde3] rounded-t-xl font-bold'>
            <a className='flex justify-between items-center w-full text-white' href="/">
              LinKedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#44cde3] font-bold'>
            <a className='flex justify-between items-center w-full text-white' href="/">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#44cde3] font-bold'>
            <a className='flex justify-between items-center w-full text-white' href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#44cde3] rounded-b-xl font-bold'>
            <a className='flex justify-between items-center w-full text-white' href="/">
              Resome <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>


  )
}

export default NavBar