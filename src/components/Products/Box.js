import React from 'react'

function Box(props) {
  const pic = '../../images/ocean-fcl.svg'
  return (
    <div className='box'>
      <img src={props.service[1]} />
      <h6>{props.service[0]}</h6>
      <span>Find out More</span>
    </div>
  )
}

export default Box