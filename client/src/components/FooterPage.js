// FooterPage.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin ,FaWhatsapp,FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './FooterPage.css';
import logo from '../Images/osmarket.png';

export default function FooterPage() {
  return (
    <footer className="footer-container">
      <div className="column">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <p className="company-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="address-contact">
        <h5>Address</h5>
          <p>Survey No.43,Pathare</p>
          <p>Thube Nagar,Nagar</p>
          <p>Road,Kharadi,Pune-14</p>
          <p>Maharashtra,India</p>

          <h5>Contact</h5>
        
          <p>hello@osumare.in</p>
          <p>+91 8459876226</p>
        </div>
      </div>
      <div className="column">
        <h2>Menu</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Career</a></li>
         
        </ul>
      </div>
      <div className="column">
        <h2>Social</h2>
        <ul className="social-icons">
          <li><a href="#"><FaFacebook /></a></li>
          <li><a href="#"><FaWhatsapp /></a></li>
          <li><a href="#"><FaInstagram /></a></li>
          <li><a href="#"><FaLinkedin /></a></li>
          <li><a href="#"><FaXTwitter /></a></li>
          <li><a href="#"><FaYoutube /></a></li>
        </ul>
      </div>
    </footer>
  );
}
