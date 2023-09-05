import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[rgb(10,25,47)] text-gray-300 flex justify-center items-center p-4'>
      <form action="https://getform.io/f/52ddfa16-d34e-41e4-b04f-091de2945c64"  method="POST"className='flex flex-col  max-w-[600px] w-full'>
        <div className='pb-8'>
        <h3 className='text-4xl font-bold inline border-b-4 border-orange-600'>Contact</h3>
        <p className='py-6'>Let's Connect and Create Something Amazing Together!</p>
        </div>
        <input  className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name"/>
        <input  className="mt-4 bg-[#ccd6f6] p-2" type="text" placeholder="Email" name="email"/>
        <textarea className="mt-4 bg-[#ccd6f6] p-2"  placeholder="Your Message" name="message"/>
    
        <button className='mt-4 border-2 hover:bg-orange-600 w-[50%] hover-border-orange-600 text-white px-4 py-3 flex justify-center mx-auto items-center'>Let's Collaborate</button>
       
       
      </form>
    </div>
  )
}

export default Contact
