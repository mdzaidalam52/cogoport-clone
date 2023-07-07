import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import smile from '../../images/smile.png'

function Navbar() {
  return (
    <div className='flex-row navbar'>
      <div className='nav-logo'>
        <img src={logo}/>
      </div>
      <div className='nav-links'>
        <span>Products</span>
        <span>Parnters</span>
        <span>Tools</span>
        <span>Company</span>
        <span>Knowledge Center</span>
        <span>Contact Us</span>
      </div>
      <div className='nav-signs'>
        <span>
          <img src={smile}/> login
        </span>
        <span className='signup-btn'>
            Sign Up
        </span>
      </div>
    </div>
  )
}

export default Navbar