import React from 'react';
import './bookOnline.css';  
import BOOKBUS from '../../assets/book-bus.jpg';

const BookOnline = () => {
  return (
    <div className="image-book-container">
      <img src={BOOKBUS} alt="Background" className="background-book-image" />
      <div className="text-overlay">
        <h2>Book Online Now to Enjoy Comfort Travel!</h2>
        <p className='image-overlap-text'>Call us: +91 94432 79915 | Email: bookings@basstravels.in</p>
      
        <div className="icon-container">
            <button className="About-BASS-TRAVELS-btn">
                BOOK NOW
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

export default BookOnline;
