import React from 'react'
import './Mobile.css'

const Mobile = ({ isOpen, setIsOpen }) => {
  return (<div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i style={{cursor:'pointer'}} className="fa-solid fa-xmark"></i>
    </div>
    <div className="mobile-options">
      <div className="mobile-option">
        <a href="#work">
          Work
        </a>
      </div>
      <div className="mobile-option">
        <a href="#project">
          Projects
        </a>
      </div>
      <div className="mobile-option">
        <a href="#skill">
          Skills
        </a>
      </div>
      <div className="mobile-option">
        <a href="#contact">
          Contact
        </a>
      </div>
    </div>
  </div>)
}

export default Mobile