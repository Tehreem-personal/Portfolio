import React from 'react'
import { FaBold, FaLaptopCode, FaUserGraduate } from 'react-icons/fa'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4  border-orange-600'>
                  About
                </p>
              </div>
              <div></div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right font-bold'>
                    <ul>
                        <li>
                    <p className='text-center text-3xl font-semibold'>Tehreem Niaz</p></li>
                    <li>
                    <p className='flex gap-2 justify-center text-xl'><FaUserGraduate size={20} color='#FFA600' /> MS Software Engineering 2023 |</p>
                    </li>
                    <li>
                    <p className='flex gap-2 justify-center text-xl'><FaLaptopCode size={20} color='#FFA600' /> Front-End Developer | React JS</p>
                    </li>
                    </ul>
              
  
                
                </div>
                <div>
                    <p  className='text-3xl font-bold'>Interests</p>
                    <ul>
                        <li>
                            <p  className='text-2xl font-semibold text-orange-600'>1. User-Centric Design</p>
                            <p className='text-justify pl-8'> I am dedicated to creating websites that not only look stunning
                                 but also provide an exceptional user experience.</p>
                        </li>
                        <li> <p  className='text-2xl font-semibold text-orange-600'>2. Front-End Development</p>
                         <p className='text-justify pl-8'>HTML5, CSS3, JavaScript, and ES6 are the building blocks of my craft. I have a knack for turning design mockups into pixel-perfect, interactive web experiences.</p>
                        </li>
                        <li>
                        <p  className='text-2xl font-semibold text-orange-600'>3. Responsive Design</p>
                        <p className='text-justify pl-8 mb-5'>
                        I am skilled in using CSS frameworks like Bootstrap, Tailwind CSS and responsive design principles to ensure that websites look great on any screen.
                        </p>
                        </li>
                    </ul>
                 
                </div>
              </div>
          </div>
        </div>
      );
//   return (
//     <div name="about" className='w-full h-screen bg-[rgb(10,25,47)] text-gray-300'>
//         <div className='flex flex-col justify-center items-center w-full h-full'>
//             <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
//                 <div className='pb-8 pl-4 '>
//                    <p className='text-4xl font-bold inline border-b-4 border-orange-600'>About</p>  
//                 </div>
                
//                 </div>
//                 <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
//                     <div className='sm:text-right text-2xl font-semibold'>
//                         <p className='text-start pl-11'>Hi! I am Tehreem Niaz. </p>
//                           <p className='flex gap-2 justify-center p-2'><FaUserGraduate size={30} color='#FFA600' fontWeight={FaBold}/> MS Software Engineering 2023 |</p>
//                         <p className='flex gap-2 justify-center p-2' ><FaLaptopCode size={30} color='#FFA600' fontWeight={FaBold}/> Front-End Developer | React JS</p>
                        
                     
//                     </div>
//                     <div>
//                         <h1 className='text-3xl font-bold'>Interests</h1>
//                         <h3 className='text-2xl font-semibold text-orange-600'>1. User-Centric Design</h3>
//                         <p>I am fascinated by the intersection of design and technology. 
//                             I'm dedicated to creating websites that not only look stunning but also provide an exceptional user experience.
//                             I believe that user-centric design is at the heart of every successful project. </p>
//                             <h3 className='text-2xl font-semibold text-orange-600'>2. Front-End Development</h3>
//                             <p>HTML5, CSS3, JavaScript, and ES6 are the building blocks of my craft.
//                                  I have a knack for turning design mockups into pixel-perfect, interactive web experiences.</p>
//                                  <h3 className='text-2xl font-semibold text-orange-600'>3. Responsive Design</h3>
//                                  <p>
//                                 I am skilled in using CSS frameworks like Bootstrap, Tailwind CSS and responsive design principles to ensure that websites look great on any screen.
//                                  </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
      
  
//   )
}

export default About
