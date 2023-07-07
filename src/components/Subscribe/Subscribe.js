import React from 'react'
import './style.css'
import { Container } from 'react-bootstrap'

function Subscribe() {
  return (
    <Container>
        <div className='subscribe'>
            <div className='subscribe-img'>
                <img className='subscrive-img' src='https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport-subscribe.png&w=640&q=75'/>
            </div>
            <div className='subscribe-input'>
                <h2>Subscribe to our newsletter now!</h2>
                <span>Don’t miss out on the latest happenings at Cogoport.</span><br/>
                <input type='text' placeholder='Enter your email here'></input>
                <button className='right-red-btn'>Subscribe</button>
            </div>
        </div>
    </Container>
  )
}

export default Subscribe