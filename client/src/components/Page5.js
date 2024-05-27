// Page5.js

import React from 'react';
import './Page5.css';
import search from "../Images/search.png"
export default function Page5() {
  return (
    <div className="page5-container">
      <h1 className="heading5">Driving Properties Inquiries for Conversion</h1>
      <div className="content">
        <div className="left-side2">
<img src={search}  alt='search'  />
        </div>
        <div className="right-side2">
          <h2>Optimized Path to Property Purchase</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget tincidunt consectetur, nulla nunc aliquam mauris, quis fringilla lectus eros vel eros. Suspendisse potenti.
          </p>
          <button className="get-started5">Get Started</button>
        </div>
      </div>
    </div>
  );
}
