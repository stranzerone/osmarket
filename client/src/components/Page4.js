// Page4.js

import React from 'react';
import './Page4.css';
import teaching from "../Images/learning.png"
const infoData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/50',
    title: 'Market Trends Analysis',
    description: 'Predictive insights to guide real estate strategies.'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/50',
    title: 'Trangeted Buyer Persona',
    description: 'Understand and connect with your ideal property buyers.'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/50',
    title: 'Competitor Insights',
    description: 'Stand out in the property market with informed strategies.'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/50',
    title: 'Visual Content Appeal',
    description: 'Captivate buyers with appeling visuals and immersive experiences.'
  }
];

export default function Page4() {
  return (
    <div className="page4-container">
      <h1 className="heading4">Navigating Real Estate's Digital Landscape</h1>
      <div className="content">
        <div className="left-side">
          {infoData.map(info => (
            <div className="info-box" key={info.id}>
              <img src={info.image} alt={info.title} />
              <div>
                <h3>{info.title}</h3>
                <p>{info.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="right-side">
          <div className="image-box">
          <img src={teaching}  alt='learning'  sizes='contain'/>
  
          </div>
        </div>
      </div>
    </div>
  );
}
