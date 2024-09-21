import React, { useState } from 'react';
import './styles.css'; // Custom CSS for styles

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="faq-section max-w-6xl">
      <h2 className="faq-title font-glass-antiqua">FAQs</h2>
      
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(1)}>
          <span>What is IB Science?</span>
          <span className={`faq-arrow ${openFAQ === 1 ? 'rotate-180' : ''}`}>▼</span>
        </div>
        {openFAQ === 1 && <div className="faq-answer">IB Science is an online platform that provides learning resources.</div>}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(2)}>
          <span>Who provides the courses?</span>
          <span className={`faq-arrow ${openFAQ === 2 ? 'rotate-180' : ''}`}>▼</span>
        </div>
        {openFAQ === 2 && <div className="faq-answer">Our courses are provided by industry experts and professionals.</div>}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(3)}>
          <span>How long does it take to become a learner?</span>
          <span className={`faq-arrow ${openFAQ === 3 ? 'rotate-180' : ''}`}>▼</span>
        </div>
        {openFAQ === 3 && <div className="faq-answer">You can become a learner within minutes by signing up on our platform.</div>}
      </div>

      {/* Center aligned "See all FAQs" button */}
      <div className="text-center">
        <button className="see-all-btn">See all FAQs</button>
      </div>

      {/* Lower section with image and text */}
      <div className="cta-section">
        <div className="decorative-icon left"></div>
        <div className="cta-content">
          <img src="https://www.example.com/image.jpg" alt="Person" className="cta-image" />
          <div>
            <h3 className="cta-title">Get Trained Today!</h3>
            <p className="cta-text">2 lines</p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
        <div className="decorative-icon right"></div>
      </div>
    </div>
  );
}

export default FAQ;
