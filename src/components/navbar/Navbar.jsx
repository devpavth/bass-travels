import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const location = useLocation(); 

    return (
        <nav className="navbar">
            <div className="navbar-items">
                <ul className="navbar-list">
                    <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}><Link to="/">Home</Link></li>
                    <li className={`navbar-item ${location.pathname === '/about' ? 'active' : ''}`}><Link to="/about">About</Link></li>
                    <li className={`navbar-item ${location.pathname === '/fleet' ? 'active' : ''}`}><Link to="/fleet">Fleet</Link></li>
                    <li className={`navbar-item ${location.pathname === '/fares' ? 'active' : ''}`}><Link to="/fares">Fares</Link></li>
                    <li className={`navbar-item ${location.pathname === '/booking' ? 'active' : ''}`}><Link to="/booking">Booking</Link></li>
                    <li className={`navbar-item ${location.pathname === '/contact' ? 'active' : ''}`}><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </div>
        </nav>
    );
};

export default Navbar;
