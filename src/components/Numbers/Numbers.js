import React from 'react'
import './Numbers.css'
import Service from './Service'
import { Container } from 'react-bootstrap'

function Intro() {

    const data = [{number: "180+", service: "Countries Served"}, 
                    {number: "10,000", service: "Ports Pairs Served"}, 
                    {number: "30,000+", service: "Tons of Air Cargo Moved"}, 
                    {number: "700,000", service: "Containers Moved"}]

    const Services = data.map((d) => <Service data={d}/>)

  return (
    <>
      <div className='numbers'>
        <Container>
          <div className='services'>
            {Services}
          </div>
        </Container>
      </div>
      <div className='curve'></div>
    </>
  )
}

export default Intro