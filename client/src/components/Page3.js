// Page3.js

import React from 'react';
import './Page3.css';

const servicesData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/50',
    title: 'Automotive SEO',
    description: 'Drive Your Success with Automotive SEO Ignite Online Visiility and Outrace the competion. Accelerate Your Business Growth Today'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/50',
    title: 'PPC Precision',
    description: 'Maximize visibility and drive quality traffice with meticulously targeted Pay-Per-Click campaigns'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/50',
    title: 'Social Acceleration',
    description: 'Engage and influence your audiance across social media platforms,amplifying your brands presene and connection'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/50',
    title: 'Content Excellence',
    description: 'Craft compelling. aitomotive-specifice contnet that resonates with enthusiasts and drives engagment'
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/50',
    title: 'Web Design',
    description: 'Transform visitors into customers with high performanve websiges designed for seamless user experince and increased converions'
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/50',
    title: 'Data-Driven Insights',
    description: 'Leverage data to refine your strategies making infirmed decisions that drive revenue growth'
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/50',
    title: 'End-to-End Solutions',
    description: 'From initial awareness to post purchase loyalty,we offer full-funnel solutions that guide customers through every step of their journey'
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/50',
    title: 'Video Marketing',
    description: 'Unleash the Power of Video Marketing Captivate,Engage and Elevate your Brand wuth Compelling Visual Stories'
  }
];

export default function Page3() {
  return (
    <div className="page3-container">
      <h1 className="heading3">Our Service Offerings</h1>
      <div className="services-grid">
        {servicesData.map(service => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className='stared-button-4'>
      <button className='started-1'>Get Started</button>

      </div>
    </div>
  );
}
