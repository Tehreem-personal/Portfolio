import React, {useState} from 'react'
import logo from "../assets/logo4.png"
import {HiOutlineMail} from 'react-icons/hi'
import {BsPersonLinesFill} from 'react-icons/bs'
import {FaBars, FaGithub, FaLinkedinIn, FaTimes} from 'react-icons/fa'
import {Link} from "react-scroll"
import TehreemCV from "../../src/TehreemCV.pdf"
const Navbar = () => {
    const[nav, setNav]=useState(false);
    const handleClick=()=>setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192F] text-gray-300'>
     <div>
     <img src={logo} alt="logo" style={{width:"80px"}}/>
        </div> 
         {/*menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to ="home" smooth={true} duration={500}>Home</Link>
                    </li>
                <li>
                <Link to ="about" smooth={true} duration={500}>About</Link></li>
                <li>
                     <Link to ="skills" smooth={true} duration={500}>Skills</Link></li>
                     <li>
                     <Link to ="work" smooth={true} duration={500}>Work</Link></li>
                     <li>
                     <Link to ="contact" smooth={true} duration={500}>Contact</Link></li>
              
            </ul>
        
        {/*Hamburger*/}
        <div onClick ={handleClick} className='md:hidden z-10'>
           {!nav ? <FaBars style={{color:"white"}}/> : <FaTimes/>}
            
             </div>
        {/*Mobile Menu*/}
        <ul className= {
            !nav? 'hidden'
            : 'absolute top-0 h-screen  left-0 w-full  bg-[#0a192F] text-gray-300 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}to ="home" smooth={true} duration={500}>Home</Link>
                    </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to ="about" smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-4xl'>
                     <Link  onClick={handleClick}to ="skills" smooth={true} duration={500}>Skills</Link></li>
                     <li className='py-6 text-4xl'>
                     <Link  onClick={handleClick}to ="work" smooth={true} duration={500}>Work</Link></li>
                     <li className='py-6 text-4xl'>
                     <Link  onClick={handleClick} to ="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        {/*Social Icons*/}
        <div className='lg:flex fixed flex-col top-[35%] left-0 social'>
<ul>
    <li className='w-[160px] h-[60px] flex font-bold justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
        <a className='flex justify-between items-center w-full text-gray-300'
         href="https://www.linkedin.com/in/tehreem-niaz-4a6a02146/" >Linkedin <FaLinkedinIn size={25}/></a>
    </li>
    <li className='w-[160px] h-[60px] flex  font-bold justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        <a className='flex justify-between items-center w-full text-gray-300'
         href="https://github.com/Tehreem-personal">Github <FaGithub size={25}/></a>
    </li>
    <li className='w-[160px] h-[60px] flex font-bold  justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] '>
        <a className='flex justify-between items-center w-full text-gray-300'
         href="mailto:tehreemawan3@gmail.com" >Email <HiOutlineMail size={25}/>
             </a>
    </li>
    <li className='w-[160px] h-[60px] flex  font-bold justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f59]'>
        <a className='flex justify-between items-center w-full text-gray-300'
         href="https://drive.google.com/file/d/1MVJGHBjxYvQ7PiikqmCtfRCfljIaa54l/view?usp=drive_link" >Resume <BsPersonLinesFill size={25}/> </a>
    </li>
</ul>


        </div>
    </div>
  )
}

export default Navbar
