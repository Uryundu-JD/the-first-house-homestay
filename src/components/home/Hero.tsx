import React from 'react';
import './Hero.css';
// import { Calendar, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import tfh_hero from '../../assets/tfh_hero.png'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        {/* <h1 className="hero-title animate-fade-in-up">
          The First House<br />
          <span className="hero-title-accent">Homestay</span>
        </h1> */}
        <img 
              src={tfh_hero} 
              alt="Logo" 
              style={{ 
                height: 'clamp(120px, 30vw, 250px)',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto',
              }} 
            />
        <p className="hero-subtitle animate-fade-in-up delay-100">
          The Only "Exclusive" Thing Here Is Your Comfort.
        </p>
        
        <div className="hero-actions animate-fade-in-up delay-200">
          <Link to="/rooms" className="btn btn-primary btn-lg">Explore Units</Link>
          {/* <a href="#video" className="btn btn-outline btn-lg flex items-center gap-2">
            Watch Video <ChevronRight size={18} />
          </a> */}
        </div>
      </div>

      {/* <div className="booking-bar-wrapper animate-fade-in-up delay-300">
        <div className="container">
          <div className="booking-bar">
            <div className="booking-input-group">
              <label>Arrival</label>
              <div className="booking-input-field">
                <Calendar size={18} className="booking-icon" />
                <input type="date" className="booking-input" />
              </div>
            </div>
            
            <div className="booking-input-group">
              <label>Departure</label>
              <div className="booking-input-field">
                <Calendar size={18} className="booking-icon" />
                <input type="date" className="booking-input" />
              </div>
            </div>
            
            <div className="booking-input-group">
              <label>Guests</label>
              <div className="booking-input-field">
                <Users size={18} className="booking-icon" />
                <select className="booking-select">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                </select>
              </div>
            </div>
            
            <button className="btn btn-primary booking-submit">Check Availability</button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
