import React from 'react'
import './style.css'
import { Container } from 'react-bootstrap'

function HowItWorks() {
  return (
    <Container>
        <h3>How It Works</h3>
        <div className='working-btn'>
          <span>For Cargo Owners</span>
          <span>For Logistic Partners</span>
        </div>
        <div className='working-diagram'>
            <img className='working-diagram-laptop' src='https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&w=640&q=75'/>
        </div>
    </Container>
  )
}

export default HowItWorks