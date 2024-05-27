// Page9.js

import React from 'react';
import './Page9.css';

export default function Page9() {
  return (
    <div className="page9-container">
      <h1 className="heading9">What Our Pharma Partners Say</h1>
      <div className="card2">
        <div className="video-thumbnail"></div>
        <div className="card-content">
          <div className="profile">
            <img src="https://thumbs.dreamstime.com/b/young-college-student-suit-portrait-55983206.jpg" alt="Profile" />
            <span className="name">Tabish Khan</span>
            <span className="symbol">"</span>
          </div>
          <p className="testimonial-text">
            Osumare's expertise in pharma marketing is inparalleled.Their stategies helped us navigate complex requlations while driving remarkable growth.
          </p>
        </div>
      </div>
      <div className="arrows">
        <div className="arrow">←</div>
        <div className="arrow">→</div>
      </div>
    </div>
  );
}
