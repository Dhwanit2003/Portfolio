import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=' h-20 bg-black'>
     <div className='flex  justify-between pt-5 pl-24 text-2xl text-white '>
        <div>
          <span>Made By Dhwanit 👀</span>
        </div>
        <div >
        <span className='flex pr-24 text-white' >
            <div className=' flex space-x-10  items-center   '>
              <div className=' rounded-full border-white border-2 p-2'>
              <a href='https://www.instagram.com/dhwxnit.rwt/' ><FaInstagram /></a>
              </div>
              <div className=' rounded-full border-white border-2 p-2'>
              <a href='https://x.com/DhwanitRawat' ><FaSquareXTwitter /></a>
              </div>
              <div className=' rounded-full border-white border-2 p-2'>
              <a href='https://github.com/Dhwanit2003' ><FaGithub /></a>
              </div>
              <div className=' rounded-full border-white border-2 p-2'>
              <a href='https://www.linkedin.com/in/dhwanit-singh-rawat-7b2080206/' ><FaLinkedin /></a>
              </div>
            </div>
          </span>
        </div>
     </div>
        
    </div>
  )
}

export default Footer