import React from 'react';
import './imageWithText.css';  
import BUS from '../../assets/bus.png'
const ImageWithText = () => {
  return (
    <div className="image-container">
      <img src={BUS} alt="Background" className="background-image" />
      <div className="text-overlay">
        <h1>Welcome to BASS TRAVELS!</h1>
        <p>We are an Exclusive  Tours & Travels Agency.</p>
        <p className='image-overlap-text'>We offer luxury buses, deluxe vans, and premium cars on tour & holiday rentals!</p>
      
        <div className="icon-container">
            <button className="About-BASS-TRAVELS-btn">
                About BASS TRAVELS
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
      </div>
    </div>
  );
};

export default ImageWithText;
