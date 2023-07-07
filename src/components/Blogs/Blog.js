import React from 'react'
import { Card } from 'react-bootstrap'

function Blog(props) {
  return (
    <>
      <div className='blog'>
          <Card style={{height: "100%"}}>
              <Card.Img variant="top" src={props.data.imgUrl} />
              <Card.Body>
                  <span className='bold-red-text'>{props.data.type}</span>
                  <Card.Title style={{marginTop: '10px'}}>{props.data.title}</Card.Title>
                  <Card.Text>{props.data.body}</Card.Text>
                  <div className='card-bottom'>
                    <span className='bold-red-text' style={{fontWeight: 500}}>Read More</span>
                    <div className='right-side'>{props.data.date}</div>
                  </div>
              </Card.Body>
          </Card>
      </div>
    </>
  )
}

export default Blog