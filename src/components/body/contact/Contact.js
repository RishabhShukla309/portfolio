import React from 'react'
import './Contact.css'
import Separator from '../../common/separator/Separator'
import SocialContact from '../../common/social-contact/SocialContact'
import resume from '../../../assets/resume.pdf'

const Contact = () => {
  return (<div className="contact">
    <Separator/>
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>Want to get in touch? Contact me on any of the platform</p>
        <SocialContact/>
      </div>
      <div className="download">
        <a download={`Rishabh's Resume`} href={resume}>
          Download Resume
        </a>
      </div>
    </div>
  </div>)
}

export default Contact