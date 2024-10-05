// Header.js
import React from 'react';
import './header.css';  
import BTL from '../../assets/BTL.png';

function Header() {
  return (
    <header>
      <div className='tours-info'>
        <div className="logo">
            <img src={BTL} alt="BTL" />
        </div>
        <div className="tours-details">
            <div className='family-tours'>
                <div className="icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        height="24px" viewBox="0 -960 960 960" width="24px" fill="#1e73be"
                    >
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z"/>
                    </svg>
                    <h6>Corporate/Family Tours</h6>
                </div>
                <p>Comfort Travel Assured</p>
            </div>
            <div className="wedding-tours">
                <div className="icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        height="24px" viewBox="0 -960 960 960" width="24px" fill="#1e73be"
                    >
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z"/>
                    </svg>
                    <h6>Corporate/Family Tours</h6>
                </div>
                <p>Organized Easily</p>
            </div>
            <div className="educational-tours">
                <div className="icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        height="24px" viewBox="0 -960 960 960" width="24px" fill="#1e73be"
                    >
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z"/>
                    </svg>
                    <h6>Corporate/Family Tours</h6>
                </div>
                <p>Arranged Instantly</p>
            </div>
        </div>
        <div className="icon-container">
            <button className="book-now-btn">
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
    </header>
  );
}

export default Header;
