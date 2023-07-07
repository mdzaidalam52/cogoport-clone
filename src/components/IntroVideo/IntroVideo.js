import React from 'react'
import './style.css'
import { Container } from 'react-bootstrap'

function IntroVideo() {
  return (
    <>
      <div className='intro-video'>
        <img src='https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/play-button-white.png'/>
      </div>
      <div className='red-banner'>
        <Container>
          <div className='red-banner-container'>
            <div>
              <h2>Grow Faster With Cogoport</h2>
              <p>Know more about Cogoport’s Global Trade Platform<sup>TM</sup></p>
            </div>
            <div className='btn-container'>
              <span className='yellow-btn'>Know More</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default IntroVideo