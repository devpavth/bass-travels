import React, { useState } from 'react';
import './distanceFlatToggle.css';

const DistanceFlatToggle = () => {
  const [activeSection, setActiveSection] = useState('distance'); // Track which section is active

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="distance-flat-container">
      {/* Left Side Toggle Buttons */}
      <div className="toggle-buttons">
        <button 
          className={activeSection === 'distance' ? 'active' : ''}
          onClick={() => handleToggle('distance')}
        >
          Distance
        </button>
        <button 
          className={activeSection === 'flatRate' ? 'active' : ''}
          onClick={() => handleToggle('flatRate')}
        >
          Flat Rate
        </button>
      </div>

      {/* Right Side Content */}
      <div className="content-section">
        {activeSection === 'distance' && (
          <div className="distance-details grid-layout">
            <label htmlFor="pickupAddress">Pick Up Address:</label>
            <input
              type="text"
              id="pickupAddress"
              placeholder="Enter a location"
            />
            <label htmlFor="dropoffAddress">Drop Off Address:</label>
            <input
              type="text"
              id="dropoffAddress"
              placeholder="Enter a location"
            />
            <label htmlFor="pickupDate">Pick Up Date:</label>
            <input type="date" id="pickupDate" />
            <label htmlFor="pickupTime">Pick Up Time:</label>
            <input type="time" id="pickupTime" />
            <button className='book-now-btn'>Reserve Now</button>
          </div>
        )}
        {activeSection === 'flatRate' && (
          <div className="flat-details grid-layout">
            <label htmlFor="trip">Trip:</label>
            <input
              type="text"
              id="trip"
              placeholder="Chennai Airport > Pondicherry"
            />
            <label htmlFor="pickupDateFlat">Pick Up Date:</label>
            <input type="date" id="pickupDateFlat" />
            <label htmlFor="pickupTimeFlat">Pick Up Time:</label>
            <input type="time" id="pickupTimeFlat" />
            <button>Reserve Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DistanceFlatToggle;
