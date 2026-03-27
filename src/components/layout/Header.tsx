import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import tfh_logo from '../../assets/tfh_logo.png';
import tfh_black from '../../assets/tfh_black.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Units', path: '/rooms' },
    // { name: 'Dining', path: '#dining' },
    // { name: 'Spa', path: '#spa' },
    // { name: 'Gallery', path: '#gallery' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="brand">
          
            <div style={{ display: 'flex', flexDirection: 'row', gap: 'clamp(8px, 2vw, 15px)', alignItems: 'center', maxWidth: '100%' }}>
              <img 
                src={tfh_logo} 
                alt="Logo" 
                style={{ 
                  height: 'clamp(50px, 12vw, 100px)',
                  width: 'auto',
                  objectFit: 'contain',
                }} 
              />
              {isScrolled && <img 
                src={tfh_black} 
                alt="Logo Text" 
                style={{ 
                  height: 'clamp(50px, 12vw, 100px)',
                  width: 'auto',
                  objectFit: 'contain',
                }} 
              />}
            </div>
          
          
        </Link>
        
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                {link.path.startsWith('/') ? (
                  <Link to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                    {link.name}
                  </Link>
                ) : (
                  <a href={link.path} className="nav-link">{link.name}</a>
                )}
              </li>
            ))}
          </ul>
          <Link to="/rooms" className="btn btn-primary book-btn">Book Now</Link>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
