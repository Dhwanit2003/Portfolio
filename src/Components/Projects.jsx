import React from 'react'
import { ProjectsDetails } from '../constants/ProjectDetails'
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const Projects = () => {
  return (
    <div className='h-screen bg-slate-400' id='Projects'>
      <div>
        <span className='flex justify-center pt-20 pb-8 text-5xl'>Projects</span> 
      </div>  
      <div className='flex justify-center w-screen h-6/12'> 
        <div className='pt-20 gap-28 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3'>
          {ProjectsDetails.map((project, index) => (
            <div key={index} className='relative group'> 
              <img className='h-44 object-cover' src={project.image} alt={project.name} />
              <div className='bottom-0'>
                <p className='text-xl absolute h-full w-full bottom-0 transition-all duration-700 group-hover:bg-black group-hover:bg-opacity-40 group-hover:text-white opacity-0 group-hover:opacity-100 px-20 pt-4'>{project.name}</p>
                <div className='transition-all duration-700 absolute bottom-0 opacity-0 group-hover:opacity-100 flex justify-center mx-20 gap-8'>
                  <div className='rounded-full hover:border-white hover:border-2 p-1 mb-3 mx-2 '>
                    <a href='#'><FaGithub /></a>
                  </div>
                  <div className='rounded-full hover:border-white hover:border-2 p-1 mb-3 mx-2'>
                    <a href='#'><HiArrowTopRightOnSquare /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
