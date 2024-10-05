import React from 'react';
import './footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faSkype } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column first-column">
          <h3>ABOUT US</h3>
          <p>BASS TRAVELS is a leading tours and travels agency in Pondicherry. With over 10 years of experience in organizing tours and providing fleet services, we have gathered significant knowledge in designing and offering you the best tour packages to meet your requirements perfectly.</p>
          <p>BASS TRAVELS also offers a wide range of travel services – high-tech fleet services for private tours, seasonal temple tours, educational tours, corporate holiday outings, business tours and wedding trips. Our objective is to offer our clients a safe, comfortable and happy journey experience!</p>
        </div>
        <div className="footer-column column-two">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">Travel Policy</a></li>
            <li><a href="#about">F.A.Q's</a></li>
            <li><a href="#services">Privacy Policy</a></li>
            <li><a href="#privacy">Feedback Form</a></li>
          </ul>
        </div>
        <div className="footer-column third-column">
          <h3>CONTACT DETAILS</h3>
          <p className='address'>#20,21, ECR, LOOFT, ROAD, <p>KARUVADIKLIPPAM,</p> <p>PONDICHERRY-605008</p></p>
          <p className='phone'>+919443279915 <p>+919791855051</p> <small>Mon-Sat | 7.00 a.m. - 10.30 p.m.</small></p>  
          <p>bookings@basstravels.in</p>
          <small>We respond within 3 hours.</small>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
            <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://plus.google.com">
                <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="https://www.skype.com">
                <FontAwesomeIcon icon={faSkype} />
            </a>
        </div>
      </div>
      <div className='authorization'>
        <p>© 2017 BASS TRAVELS | Powered by <span>DIGITAL FACTORY</span></p>
      </div>
    </footer>
  );
};

export default Footer;
