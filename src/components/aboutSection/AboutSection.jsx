import React from 'react';
import './aboutSection.css';  
import TIP from '../../assets/tip.jpg';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About - BASS TRAVELS</h2>
        <p>
          BASS TRAVELS – a leading tours and travels agency in Pondicherry with over ten years of experience specializes in organizing tours and offering fleet & taxi services. We have gathered significant knowledge and exposure to design and offer you the best services and meet your requirements perfectly.
        </p>
        <p>
          We also accommodate custom trip requests to offer you the best we can at reasonable fares. Our professional drivers will guide and support you to ensure that your journey turns out to be a comfortable experience.
        </p>
        <button className="learn-more-btn">Learn More 
        <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="20px" 
                    viewBox="0 -960 960 960" 
                    width="24px" 
                    fill="#ffffff"
                    style={{ marginLeft: '1px' }} 
                >
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
        </button>
      </div>
      <div className="about-image">
        <img src={TIP} alt="Top 5 Tips" />
      </div>
    </section>
  );
};

export default AboutSection;
