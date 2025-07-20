
import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectInfo } from '../Info'
import { Image } from '@mantine/core';

const Projects = () => {
  return (
    <div className='px-16 my-10  font-mono md-mx:px-6' id='Work'>
        <h1 className='text-4xl mb-5 text-center text-white font-bold sm-mx:text-3xl xs-mx:text-2xl'><span className='text-primaryColor'>02.&nbsp;</span>Projects</h1>
   <div className='flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2'>
    {
    ProjectInfo.map((project:any, index:number)=><ProjectCard key={index} title={project.title} desc={project.desc}
     image={project.image} live={project.live} link={project.link} github={project.github} technologies={project.technologies}/>)
    }

   </div>
    </div>
   
  )
}

export default Projects