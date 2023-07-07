import React from 'react'
import "./style.css"
import Blog from './Blog'

function Blogs() {
    const data = [
        {
            imgUrl: "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEnvirotainer_Banner.png&w=384&q=75",
            type: "Trade News",
            title: "Cogoport Enables Movement of 11 Envirotainer Containers from India to Italy ",
            body: "Cogoport’s collective logistics and technical expertise came in handy as our operations and technical teams went the extra mile and designed bespoke solutions on the go.",
            date: '05 July 2023'
        },
        {
            imgUrl: "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FCogoport_Positioning_Banner.png&w=384&q=75",
            type: "Expert Speak",
            title: "Cogoport: A Global Trade Platform",
            body: "Cogoport leverages technology and caters to enterprises of all sizes. Our solutions improve predictability and enhance human capabilities.",
            date: "03 July 2023"
        },
        {
            imgUrl: "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEng_2405_Banner.png&w=384&q=75",
            type: "Industry Basics",
            title: "Understanding Lean Supply Chain Management: Definition and Considerations",
            body: "Lean Supply Chain Management represents the extension of Lean Thinking across the entire supply chain. So, what are the benefits and key components? Read on!",
            date: "24 June 2023"
        }
    ]

    const cards = data.map(d => <Blog data={d}/>)
  return (
    <div className='blogs'>
        <h3>Blogs</h3>
        <div className='cards'>
            {cards}
        </div>
      <span className='red-btn'>View All</span>
    </div>
  )
}

export default Blogs