import React, { useState } from 'react'
import './Header.css'
import Mobile from '../mobile/Mobile'
import Web from '../web/Web'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="header">
      <div className="logo">Rishabh Shukla</div>
      <div className="menu">
        <div className="web-menu">
          <Web/>
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i style={{ cursor: 'pointer' }} className="fa-solid fa-bars menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  )
}

export default Header