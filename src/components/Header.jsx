import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faCalendar } from '@fortawesome/free-solid-svg-icons';
import './css/Header.css';
import BackToTezzeraktBubble from './B2TezzeraktMedia';
import calendar from '../../assets/Calendar2.png';

function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop === 0) {
        setVisible(true);
      } else if (scrollTop > lastScrollTop) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const handleScheduleClick = () => {
    window.open('https://calendar.google.com/calendar/u/0/r/eventedit', '_blank');
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // If already on the home page, scroll to the section
      scroller.scrollTo('why-choose-section', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    } else {
      // Navigate to the home page and scroll to the section
      navigate('/', { state: { scrollTo: 'why-choose-section' } });
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div className={`header-wrapper ${visible ? 'top-visible' : 'hidden'}`}>
      <nav className="nav-container">
        {/* Left Section */}
        <div className="nav-left">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <BackToTezzeraktBubble />
            

            
          </ul>
        </div>
        
        {/* Center Logo */}
        {/* Right Section */}
        <button onClick={handleContactClick} className="contact-button">
                Contact Us
              </button>
      </nav>
      <h3 className="header-title">Thrive Personology</h3>
    </div>
  );
}

export default Header;
