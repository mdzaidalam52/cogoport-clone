import React from 'react'
import './Banner.css'
import wa from '../../images/whatsapp.png'
import { Container } from 'react-bootstrap'

function Banner() {
  return (
    <div className='banner'>
      <Container style={{height: '100%'}}>
        <div className='banner-container'>
          <div className='banner-contact'>
            <h1>Grow Faster, Go Global.</h1>
            <p>Strengthen your Supply Chain, and Scale your Business<br/>with Reliable Shipping and Cashflows.</p>
            <span>Talk to us now!</span>
            <div className='banner-input'>
              <img src={wa}/>
              +91
              <input type='number' placeholder='WhatsApp Number'/>
              <button className='green-btn'>Get Started</button>
            </div>
          </div>
          <div className='banner-vid'>
          <video autoplay loop playsinline poster="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/final_static_chat_girl_img.png" class="styles_desktop_image__WOlJu">
            <source src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoverse_desktop_2_webm.webm" type="video/webm" />

          </video>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner