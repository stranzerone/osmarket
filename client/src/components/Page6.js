// Page6.js

import React from 'react';
import './Page6.css';

const cardData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/50',
    title: 'Call-To-Action Optimization',
    description: 'Our carefull crafted CTAs guide potential buyers through the property journey,enhance engagement and conversion rates'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/50',
    title: 'Landing Page Efficency',
    description: 'Tailored landing pages are designed for maximum property lead conversion.They provide seamless user experiences and clear pathways for inquiry submission'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/50',
    title: 'Social Proof Utilization',
    description: 'Leverage the power of testimonals and success stories from satisfied buyers ti build trust and credibilty encouraging hesitant prospects to taken action'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/50',
    title: 'Mobile Friendly Experience',
    description: 'With a responsive design approch, our strategies ensure a seamless browsing experience across al devices. This responsivness enhances engagement and conversions by accommodating the preferences of  on-the-go pro[erty seekers'
  }
];

export default function Page6() {
  return (
    <div className="page6-container">
      <h1 className="heading6">Driving Property Inquiries to Conversion</h1>
      <p>Stremlined strategies for Real Estate Success</p>
      <div className="cards-container">
        {cardData.map(card => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
