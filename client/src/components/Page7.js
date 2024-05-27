// Page6.js

import React from 'react';
import './Page6.css';

const cardData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/50',
    title: 'Effective CTAs',
    description: 'See how our strategic CTSs drove a signigicant increase in property inquires and accelerated sales for a real estate agency'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/50',
    title: 'Conversion-Optimizsed Landing Pages',
    description: 'Explore a cases study where our landing page optimization increased property lead conversion rates by 30%'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/50',
    title: 'Trust Building with social Proof',
    description: 'Discover how leveraging client testimonials boosted buyers confidenve leading to higher conversion rates for a property development project'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/50',
    title: 'Mobile_First Success',
    description: 'Learn how our mobile-rspnsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency'
  }
];

export default function Page7() {
  return (
    <div className="page6-container">
      <h1 className="heading6">Our Expertise In Action</h1>
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
