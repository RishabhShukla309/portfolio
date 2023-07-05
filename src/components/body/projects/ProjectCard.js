import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (<div className="project-card">
    <div className="project-info">
      <label className="project-title">{project.title}</label>
      <div className="project-links">
        {project.demo && (<a className="project-links" target="_blank" href={project.demo}>
          <div className="link-button">
            <i className="fa-solid fa-globe"></i> Demo
          </div>
        </a>)}
        {project.github && (<a className="project-links" target="_blank" href={project.github}>
          <div className="link-button">
            <i className="devicon-github-original colored"></i>Github
          </div>
        </a>)}
      </div>
      <p>{project.about}</p>
      <div className="project-tags">
        {project.tags.map((tag) => {
          return <label className="tag">{tag}</label>
        })}
      </div>
    </div>
    <img src={project.image} className="project-photo" alt="project"/>
  </div>)
}

export default ProjectCard