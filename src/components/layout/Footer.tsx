import React from 'react';
import { Camera, MessageSquare, Globe, MapPin, Phone, } from 'lucide-react';
import tfh_white from '../../assets/tfh_white.png'
import tfh_logo from '../../assets/tfh_logo.png'
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            {/* <div className="brand">
              <span className="brand-logo">Lumina</span>
              <span className="brand-subtitle" style={{color: 'var(--color-primary-light)'}}>HOTEL & RESORT</span>
            </div> */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: 'clamp(8px, 2vw, 15px)', alignItems: 'center', maxWidth: '100%', flexWrap: 'wrap' }}>
              <img 
                src={tfh_logo} 
                alt="Logo" 
                style={{ 
                  height: 'clamp(50px, 12vw, 100px)',
                  width: 'auto',
                  objectFit: 'contain',
                }} 
              />
              <img 
                src={tfh_white} 
                alt="Logo text" 
                style={{ 
                  height: 'clamp(50px, 12vw, 100px)',
                  width: 'auto',
                  objectFit: 'contain',
                }} 
              />
            </div>
            
            <p className="footer-desc">
            The Only "Exclusive" Thing Here Is Your Comfort.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram"><Camera size={20} /></a>
              <a href="#" className="social-link" aria-label="Facebook"><MessageSquare size={20} /></a>
              <a href="#" className="social-link" aria-label="Website"><Globe size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Our Story</a></li>
              <li><a href="/rooms">Rooms & Units</a></li>
              {/* <li><a href="#dining">Dining Experiences</a></li>
              <li><a href="#spa">Wellness & Spa</a></li>
              <li><a href="#offers">Special Offers</a></li> */}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Policies</h4>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#cancellation">Cancellation Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Easterhills Subdivision, Baguio City, Philippines, 2600</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+63 952-488-0613</span>
              </li>
              {/* <li>
                <Mail size={18} className="contact-icon" />
                <span>reservations@luminahotel.com</span>
              </li> */}
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The First House Homestay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
