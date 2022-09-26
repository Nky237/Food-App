import React from 'react'
import Google from '../assests/Google.png'
import App from '../assests/App.png'
import {BsInstagram} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'
import {BsYoutube} from 'react-icons/bs'
import '../App.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footy'>
        <section className='foot1'>
            <div>
                <ul>
                    <h6>Company</h6>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
            <ul>
                    <h6>Support</h6>
                    <li>Help Center</li>
                    <li>Safety Center</li>
                </ul>
            </div>
            <div>
            <ul>
                    <h6>Legal</h6>
                    <li>Cookies Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Dispute resolution</li>
                </ul>
            </div>
            <div style={{display: 'flex', flexDirection: 'column' }}>
                <h6>Install App</h6>
                <img src={Google} alt = 'google logo' />
                <img src={App} alt = 'App logo' />
                
            </div>
        </section>
        <section style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
            <small>© 2021 LILIES, All rights reserved</small>
            </div>
            <div>
                <BsInstagram  />
                <IoLogoTwitter style={{marginLeft:'20px'}}/>
                <BsYoutube style={{marginLeft:'20px'}}/>
            </div>
        </section>
        </div>
    </div>
  )
}

export default Footer