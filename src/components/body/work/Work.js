import React from 'react'
import './Work.css'
import Separator from '../../common/separator/Separator'
import { WorkData } from '../../data/Work'
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <div className="work">
      <Separator/>
      <label className="section-title">Work</label>
      <div className="work-list">
        {WorkData.map((item) => {
          return (
            <WorkCard item={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default Work