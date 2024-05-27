// FAQPage.js

import React, { useState } from 'react';
import './Page10.css';

const faqData = [
  {
    question: "What is the return policy?",
    answer: "Our return policy allows you to return items within 30 days of purchase. Items must be in original condition and packaging."
  },
  {
    question: "How do I track my order?",
    answer: "You can track your order using the tracking number provided in your confirmation email. Visit our tracking page and enter your tracking number."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer 24/7 customer support. You can contact us via email, phone, or live chat for any assistance."
  },
  {
    question: "Can I change my order?",
    answer: "Yes, you can change your order within 24 hours of placing it. Please contact our customer service team to make changes."
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="heading-faq">Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div
          className={`faq-card ${activeIndex === index ? 'show' : ''}`}
          key={index}
        >
          <div
            className={`question ${activeIndex===index?'opened':null}`}
          >
            {faq.question}
            <button
              className="dropdown-button"
              onClick={() => toggleAnswer(index)}
            >
              {activeIndex === index ? '-' : '+'}
            </button>
          </div>
          <div className="answer">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
}
