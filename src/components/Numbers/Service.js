import React from 'react'

function Service(props) {
  return (
    <div className='service'>
        <h1>{props.data.number}</h1>
        <p>{props.data.service}</p>
    </div>
  )
}

export default Service