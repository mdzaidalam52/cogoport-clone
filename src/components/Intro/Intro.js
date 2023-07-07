import React from 'react'
import './Intro.css'
import map from '../../images/map-supply-chain.png'

function Intro() {
  return (
    <div className='intro'>
        <div>
            <h1>One Stop Solution for Your</h1>
            <h1>Supply Chain</h1>
            <span>Connected Shipping, Finance, and Trade-tech, to Power Global Trade and Supply Chains.</span>
        </div>
        <div>
            <img className='intro-map' src={map}/>
        </div>
    </div>
  )
}

export default Intro