import React from 'react';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="heading-text">
        <h1 className="heading-contact">Connect with Our Digital Experts</h1>
        <p>Reach Out For Tailored strategies and Results-driven Solutions <br />Let's Elevate Your Online Presence Together</p>
      </div>
      <div className="contact-card2">
        <div className="form-left">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>
        <div className="form-right">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
        </div>
      </div>
      <div className="button-div">
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
}
