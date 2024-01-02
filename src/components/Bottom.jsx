import React from 'react'
import logo from '../assets/images/logo.png'
import { FaInstagram,FaLinkedin, FaTwitter } from "react-icons/fa";
import './bottom.css'


const Bottom = () => {
  return (
<div className='container footer-container'>
<div className='footer-part-1'>
    <div className='footer-un-part-1'>
        <img src={logo} />
    <ul>
            <li>Silicon Valley</li>
            <li>Atlanta</li>
            <li>Indianapolis</li>
            <li>New York City</li>
    </ul>
    </div>
    <div className='footer-un-part-2'>
        <h5>Privacy Policy</h5>
        <h5>Terms of Use</h5>
        <h5>Copyrights(C) @Devdotun</h5>
    </div>
</div>
<hr />
<div className='footer-part-2'>
    <div>
        <p>hello@101labs.com</p>
    </div>
    <div className="socials-1">
        <FaInstagram />
        <FaLinkedin />
        <FaTwitter />
    </div>
</div>
</div>
  )
}

export default Bottom