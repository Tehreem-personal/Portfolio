import React from 'react'
import WorkImg from "../assets/Berain.JPG"
import contact from "../assets/Contact.JPG"
import food from "../assets/FoodApp.JPG"
import quote from "../assets/QuoteGenerator.JPG"
import sushi from "../assets/Sushi.JPG"
import aljazeirah from "../assets/ALjazeirah.JPG"
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen  bg-[rgb(10,25,47)] text-gray-300 p-10'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <h3 className='text-4xl font-bold inline border-b-4 border-orange-600' >Work</h3>
                <p className='py-6 text-xl'>"Welcome to my showcase of front-end wonders – where pixels meet passion, and code comes to life.
                     Explore the digital world I've crafted, one line of HTML and CSS at a time."</p>
            </div>
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage:`url(${sushi})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        HTML/CSS Sushi App
                        </span>
                        <div>
                            <a href="https://sushi-app-three.vercel.app/"><button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'> Demo</button></a>
                            <a href="/"><button  className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${food})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        ReactJS-Tailwind Food App
                        </span>
                        <div>
                            <a href="https://reactjs-tailwind-food-app.vercel.app/"><button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'> Demo</button></a>
                            <a href="/"><button  className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Berain Web UI
                        </span>
                        <div>
                            <a href="http://fgstg.berain.com.sa/berain_oms/address/choose"><button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'> Demo</button></a>
                            <a href="/"><button  className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${aljazeirah})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           Aljazeirah Web UI
                        </span>
                        <div>
                            <a href="http://fgstg.berain.com.sa/berain_oms/address/choose"><button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'> Demo</button></a>
                            <a href="/"><button  className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${contact})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wide'>
                        React Contact Form 
                        <br/>with Firebase Integration 
                        </span>
                        <div>
                            <a href="https://react-contact-form-firebase-integration.vercel.app/"><button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'> Demo</button></a>
                            <a href="/"><button  className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${quote})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wide text-right'>
                      Random-Quote Generator <br/>
                      React JS
                        </span>
                        <div>
                            <a href="https://react-quote-generator-app-gamma.vercel.app/"><button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'> Demo</button></a>
                            <a href="/"><button  className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Work
