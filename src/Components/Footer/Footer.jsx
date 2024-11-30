import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div>
       <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="logo-title">
                        <img src={assets.logo} alt="" className='logo' />
                    </div>
                    <p>A Private partners of food delivery in your city. And you can eat the food of any brand of city from home. Treast on us our delicious food and reaching you to the magic world of marvalous and fantabulous taste of foods</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy & Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-987654321</li>
                        <li>chat@YumMart.com</li>
                    </ul>
                </div>
            </div>
            <hr />
                <p className='copy'>Copyright 2024 © YumMart.com - All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer
