import React from 'react';
import './infoColumns.css';

const InfoColumns = () => {
  return (
    <div className="info-columns">
        <div className="column-1">
            <div className="icon-text-wrapper">
                <div className="icon-border">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1e73be"><path d="M438-226 296-368l58-58 84 84 168-168 58 58-226 226ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>
                </div>
                <div className="text-content">
                    <h3>Easy Online Booking</h3>
                    <p>Just fill up basic details and choose the dates on our reservation form in this website to book your travel needs.</p>
                </div>
            </div>
        </div>
        <div className="column-2">
            <div className="icon-text-wrapper">
                <div className="icon-border">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1e73be"><path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>
                </div>
                <div className="text-content">
                    <h3>Professional Drivers</h3>
                    <p>Our drivers are not only professional but also very supportive to ensure your journey is totally comfortable.</p>
                </div>
            </div>
        </div>
        <div className="column-3">
            <div className="icon-text-wrapper">
                <div className="icon-border">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1e73be"><path d="M240-120q-17 0-28.5-11.5T200-160v-82q-18-20-29-44.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 29-11 53.5T760-242v82q0 17-11.5 28.5T720-120h-40q-17 0-28.5-11.5T640-160v-40H320v40q0 17-11.5 28.5T280-120h-40Zm242-640h224-448 224Zm158 280H240h480-80Zm-400-80h480v-120H240v120Zm100 240q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320Zm280 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320ZM258-760h448q-15-17-64.5-28.5T482-800q-107 0-156.5 12.5T258-760Zm62 480h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280Z"/></svg>
                </div>
                <div className="text-content">
                    <h3>Wide Fleet of Vehicles</h3>
                    <p>All our fleet that are in perfect condition before the journey to provide you a safe and pleasant travel experience.</p>
                </div>
            </div>
        </div>
        <div className="column-4">
            <div className="icon-text-wrapper">
                <div className="icon-border">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1e73be"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/></svg>
                </div>
                <div className="text-content">
                    <h3>Free Travel Insurance</h3>
                    <p>Enjoy your travel in comfort with our free travel insurance that offers life coverage up to Rs. 2 Lacs. Conditions apply.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default InfoColumns;
