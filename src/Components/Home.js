import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[rgb(10,25,47)] '>
        <div className = "max-w-[1000px] flex flex-col justify-center h-full text-white mx-auto px-8">
             
             <h1 className='text-orange-600 text-5xl sm:text-5xl  font-bold'>Tehreem Niaz</h1>
             <h2 className='text-5xl sm:text-3xl  text-[#8892b0] font-semibold py-2'>Front-End Developer</h2>
             <p className="text-2xl py-2 max-w-[700px] text-justify">Detail-oriented recent graduate with a strong academic foundation in
front-end development and a passion for creating visually appealing
and user-friendly web interfaces. Seeking to leverage my skills in
HTML, CSS, and JavaScript to contribute to a dynamic team as a
Front-End Developer.</p>
<div>
    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center  hover:bg-orange-600">View Work 
    <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3'/>
        </span>
        </button>
</div>
</div>
     
    </div>
  )
}

export default Home
