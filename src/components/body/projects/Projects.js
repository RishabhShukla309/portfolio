import React from 'react'
import './Projects.css'
import { ProjectData } from '../../data/projects'
import ProjectCard from './ProjectCard'
import Separator from '../../common/separator/Separator'

const Projects = () => {
  return (
    <div className="projects">
      <Separator/>
      <label className="section-title">Projects</label>
      <div>
        {ProjectData.map((project) => {
          return <ProjectCard project={project}/>
        })}
      </div>
    </div>
  )
}

export default Projects