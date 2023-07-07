import React from 'react'
import './style.css'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'

function Footer() {
  return (
    <div>
        <div className='routes'>
            <div>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/AUBNE?service=fcl">Kolkata to Brisbane</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/SEGOT/INCCU?service=fcl">Gothenburg to Kolkata</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/TRDRC?service=fcl">Kolkata to Derince</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/AEJEA?service=fcl">Kolkata to Jebel Ali</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/GBFXT?service=fcl">Kolkata to Felixstowe</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/CNQZH/INCCU?service=fcl">Qinzhou Pt to Kolkata</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/BJCOO?service=fcl">Kolkata to Cotonou</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/TZZNZ?service=fcl">Kolkata to Zanzibar</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/MYBTU?service=fcl">Kolkata to Bintulu</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/USORF/INCCU?service=fcl">Norfolk , Virginia to Kolkata</a>
            </div>
            <div>
                <a class="route-links" href="/en-IN/discovery-rates/sea/IDSRG/INCCU?service=fcl">Semarang to Kolkata</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/AEQIW?service=fcl">Kolkata to Umm al Qaiwain</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/CNGON/INCCU?service=fcl">Gaolan to Kolkata</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/MYPKG?service=fcl">Kolkata to Port Klang West (Pelabuhan Klang)</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/ITGOA?service=fcl">Kolkata to Genoa</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/FJSUV?service=fcl">Kolkata to Suva</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/SAJED/INCCU?service=fcl">Jeddah to Kolkata</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/CNCIV/INCCU?service=fcl">Guandong to Kolkata</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/NLRTM/INCCU?service=fcl">Rotterdam to Kolkata</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/JPNGO/INCCU?service=fcl">Nagoya to Kolkata</a>
            </div>
            <div>
                <a class="route-links" href="/en-IN/discovery-rates/sea/ARBUE/INCCU?service=fcl">Buenos Aires to Kolkata</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/RUNOI?service=fcl">Kolkata to Novorossiysk (RU)</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/NGAPP?service=fcl">Kolkata to Apapa (Lagos)</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/CAMTR?service=fcl">Kolkata to Montreal</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/TWKEL/INCCU?service=fcl">Keelung to Kolkata</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/USSYT?service=fcl">Kolkata to Saint Louis (US)</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/MUPLU?service=fcl">Kolkata to Port Louis</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/COCTG/INCCU?service=fcl">Cartagena to Kolkata</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/USOAK?service=fcl">Kolkata to Oakland</a>
                <a class="route-links" href="/en-IN/discovery-rates/sea/INCCU/CAWNP?service=fcl">Kolkata to Winnipeg</a>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='footer-copyrights-tnc'>
                <p id='footer-copyrights'>© 2023 Cogo Universe PTE. All rights reserved.</p>
                <div id='footer-tnc'>
                    <a>Terms and Conditions</a> | <a>Cookie Policy</a> | <a>Privacy and Data Protection Policy</a>
                </div>
            </div>
            <div className='footer-contact-lang'>
                <div className='footer-contact'>
                    <a><img src={linkedin}/></a>
                    <a><img src={facebook}/></a>
                    <a><img src={instagram}/></a>
                </div>
                <div className='footer-lang'>
                    <img src='https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fglobe.png&w=48&q=75'/>
                    <strong>English (IN)</strong>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer