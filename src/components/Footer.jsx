import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Correct import
import '../components/css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const handleBackgroundClick = (event) => {
    event.preventDefault();
    
    const scrollDuration = 1500;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <footer className="footer" onClick={handleBackgroundClick}>
      <div className="scroll-to-top" onClick={handleBackgroundClick}>
        <FontAwesomeIcon icon={faArrowUp} size="2x" />
      </div>
      

    </footer>
  );
}

export default Footer;
