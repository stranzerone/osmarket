// App.js

import React from 'react';
import './Page1.css';
import logo from '../Images/osmarket.png';

const Page1 = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="auto" />
        </div>
        <button className="contact-button">Contact Us</button>
      </header>
      <main>
        <h1>
          Elevate <span>Real Estate success</span> with <br /> Osmare's Digital Expertise
        </h1>
        <p>
            Tailored Solutions for Trieving  in the Digital Real State Landscape
        </p>

        <button className="start-button">Get Started</button>
      
      </main>
    </>
  );
}

export default Page1;
