import React from 'react'
import './style.css'
import { Container } from 'react-bootstrap'

function GetStarted() {
  return (
    <Container>
        <div className='get-started'>
            <div>
                <h1>Get Started Today</h1>
                <p>Plan, Book and Finance your shipment in one place.</p>
                <span>Experience how Cogoport's Global Trade Platform can Turbocharge your Business.</span>
                <button className='get-started-red-btn'>Get Started</button>
            </div>
            <div>
                <img src='https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&w=384&q=75'/>
            </div>
        </div>
    </Container>
  )
}

export default GetStarted