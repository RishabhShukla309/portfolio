import React from 'react'
import { SocialData } from '../../data/Social'
import './SocialContact.css'

const SocialContact = () => {
  return (
    <div className="social-contact">
      {SocialData.map((item) => {
        return (
          <a href={item.link} target="_blank" rel="noreferrer">
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" alt="social_icons"/>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default SocialContact