import React from 'react'
import './style.css'

function Industries() {
  return (
    <div>
        <h3>Industries Served</h3>
        <div className='industries-name-logo'>
          <div>
            <img src='https://www.cogoport.com/images/chemical.svg'/>
            <span>Chemicals</span>
          </div>
          <div>
            <img src='https://www.cogoport.com/images/paracetamol.svg'/>
            <span>Pharmaceuticals</span>
          </div>
          <div>
            <img src='https://www.cogoport.com/images/electronics.svg'/>
            <span>Electronics</span>
          </div>
          <div>
            <img src='https://www.cogoport.com/images/whitegoods.svg'/>
            <span>White Goods</span>
          </div>
          <div>
            <img src='https://www.cogoport.com/images/textiles.svg'/>
            <span>Textiles</span>
          </div>
          <div>
            <img src='https://www.cogoport.com/images/manufactoring.svg'/>
            <span>Manufacturing</span>
          </div>
          <div>
            <img src='https://www.cogoport.com/images/agriculture.svg'/>
            <span>Agriculture</span>
          </div>
        </div>
    </div>
  )
}

export default Industries