import React from 'react'
import Box from './Box'

function Product(props) {

  const services = props.data.services.map(service => <Box service={service}/>)
  return (
    <div className='product'>
        <h4>{props.data.name}</h4>
        <div className='boxes'>
          {services}
        </div>
    </div>
  )
}

export default Product