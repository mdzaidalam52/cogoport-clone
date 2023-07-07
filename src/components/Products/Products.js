import React from 'react'
import './style.css'
import Product from './Product'
import cargoInsurance from '../../images/cargo-insurance.svg'
import cogoassured from '../../images/cogoassured.svg'
import customsCfsHandling from '../../images/customs-cfs-handling.svg'
import dnt from '../../images/dnt.svg'
import domesticFulfilment from '../../images/domestic-fulfilment.svg'
import doorToDoor from '../../images/door-to-door.svg'
import exportFactoring from '../../images/export-factoring.svg'
import freightRates from '../../images/freight-rates.svg'
import ftlPtl from '../../images/ftl-ptl.svg'
import internationalAir from '../../images/international-air.svg'
import oceanFcl from '../../images/ocean-fcl.svg'
import oceanLcl from '../../images/ocean-lcl.svg'
import payLater from '../../images/pay-later.svg'
import qpq from '../../images/qpq.svg'
import tnv from '../../images/tnv.svg'
import trailer from '../../images/trailer.svg'

function Products() {

  const data = [
    {name: "End to End Cross Border Logistics", 
    services: [["Ocean: FCL", oceanFcl], ["Ocean: LCL", oceanLcl], ["International Air", internationalAir], ["Customs, CFS, & Hadling", customsCfsHandling]]},
    {name: "Domestic Logistics", 
    services: [["FTL, PTL", ftlPtl], ["Trailer & Rail Container Haulage", trailer]]},
    {name: "Supply Chain Solutions", 
    services: [["CogoAssured", cogoassured], ["Domestic Fulfilment", domesticFulfilment], ["Door to Door Shipments", doorToDoor], ["Cargo Insurance", cargoInsurance]]},
    {name: "Financial Services", 
    services: [["Pay Later", payLater], ["Export Factoring", exportFactoring]]},
    {name: "Trade Management Solutions", 
    services: [["Freight Rates & Schedules", freightRates], ["Quick Premium Quotations", qpq], ["Duties & Taxes Calculator", dnt], ["Tracking & Visibility", tnv]]},
  ]

  const products = data.map (d => <Product data = {d}/>)

  return (
    <div className='products'>
        <h3>Our Products</h3>
        {products}
    </div>
  )
}

export default Products