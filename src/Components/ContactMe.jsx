import React from 'react'

const ContactMe = () => {
  return (
    <div className=' h-3/6  bg-orange-600 '>
     <div className=' flex justify-center text-3xl pt-20 '>
     <span> Contact Me</span>
     </div>  

     <div className='flex flex-col  justify-center p-10 w-3/4 pt-10 ml-60'>
      <form className='  flex flex-col  pt-10 px-96 gap-4'>
        <input type='text' placeholder='First Name'  className='rounded-lg p-2 '></input>
        <input type='text' placeholder='Second Name'className='rounded-lg p-2 ' ></input>
        <textarea type='text' placeholder='Message' className='rounded-lg p-2 h-40' ></textarea>
      </form>
      <div className=' flex justify-center p-10 '>
       <button className=' rounded-lg bg-blue-500  px-10 p-3 text-xl mb-10   '>Submit</button>
      </div>
     </div> 
    </div>
  )
}

export default ContactMe