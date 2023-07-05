import React from 'react'
import SocialContact from '../../common/social-contact/SocialContact'
import './About.css'
import aboutImage from '../../../assets/coding.png'

const About = () => {
  return (<div className="about">
    <div className="about-top">
      <div className="about-info">
        Hello There 👋, I am<br/> <span className="info-name">Rishabh Shukla</span>. <br/> I love experimenting with the web.
      </div>
      <div className="about-photo">
        <img src={aboutImage} className="picture" alt="about"/>
      </div>
    </div>
    <SocialContact/>
  </div>)
}

export default About