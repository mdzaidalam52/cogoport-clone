import React from 'react'
import './style.css'
import waLogo from '../../images/whatsapp-logo.png'

function WhatsAppFlag() {
  return (
    <div className='whatsapp-flag'>
        <img src={waLogo}/>
        <span>WhatsApp Us</span>
    </div>
  )
}

export default WhatsAppFlag