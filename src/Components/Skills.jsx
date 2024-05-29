import React from 'react';
import { Container } from 'react-bootstrap';

const Skills = ({skills}) => {
  return (
    <>
      <Container className='h-screen  bg-slate-800'>
        <div>
          <span className='flex justify-center pt-12 text-4xl text-white'>Skills</span>
        </div> 
       <div className=' flex justify-center  w-screen h-6/12  '>
        <div className='pt-20  gap-24 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5   '>
          {skills.map((skill,index) => (
            <div key={index} className=' flex flex-col '> 
            <div className='size-20 rounded-full bg-white flex justify-aournd' >
              <img className='rounded-full bg-white ' src={skill.image} alt={skill.name} />
            </div>
            <p className='text-white pl-6 pt-4 '>
              {skill.name}
            </p>

            </div>
           
          ))}
        </div>
        </div>
      </Container>
    </>
  );
};

export default Skills;
