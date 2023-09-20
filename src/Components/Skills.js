import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import reactimg from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import api from "../assets/APIs.png"
import github from "../assets/github.png"

import JS from '../assets/javascript.png'
import react from '../assets/react.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[rgb(10,25,47)] text-gray-300 p-10'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'> 
            <div>
                <h3 className='text-4xl sm:text-3xl font-bold inline border-b-4 border-orange-600 skill' >Experience</h3>
                <p className='py-4 text-xl'>These are the technologies i have worked with: </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html}/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css}/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript}/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={reactimg}/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind}/>
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={bootstrap}/>
                    <p className='my-4'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={api}/>
                    <p className='my-4'>APIs</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github}/>
                    <p className='my-4'>GitHub</p>
                </div>

                </div>
            </div>
        </div>
   
  )
}

export default Skills
