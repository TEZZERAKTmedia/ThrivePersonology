import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './css/Home.css';
import headshot from '../../assets/Tim.png';
import BackgroundImage from '../../assets/Background.jpeg'; // Import your background image
import Footer from './Footer';
import SpinningImage from './spinningImage';
import Header from './Header';
import Testimonials from './Testimonials'; // Import the new Testimonials component
import '../components/css/FlipCard.css';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

function Home() {
  const [showPortfolioOverlay, setShowPortfolioOverlay] = useState(false);

  const handleLetsChatClick = () => {
    window.Location.href="https://calendar.app.google/UvCVgjQ18CnSyxgo9";
  };

  const closePortfolioOverlay = () => {
    setShowPortfolioOverlay(false);
  };

  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev.add(entry.target)));
          } else {
            setVisibleSections(prev => {
              prev.delete(entry.target);
              return new Set(prev);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => {
      sectionRefs.current.forEach(ref => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div className="home-container">
      <div className="background-container">
        <img src={BackgroundImage} alt="Background" className="background-image" />
      </div>

      <h1 className="first-header">Thrive Personology</h1>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <SpinningImage />
            <p>Your go-to platform for personalized insights and growth.</p>
            <div className="cta-buttons">
              <a className="primary-cta"href="https://calendar.app.google/UvCVgjQ18CnSyxgo9">Let's Chat</a>
              <Link to="/services" className="secondary-cta">Explore Services</Link>
            </div>
          </div>
          {showPortfolioOverlay && <PortfolioOverlay onClose={closePortfolioOverlay} />}
        </div>
      </section>
      <section className="intro-section">
        <motion.h1
          ref={el => sectionRefs.current[0] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[0]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
          Is This Your Team?
        </motion.h1>
        <motion.ul
          ref={el => sectionRefs.current[1] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[1]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <li>Declining Motivation</li>
          <li>Lukewarm Enthusiasm</li>
          <li>High Turnover</li>
          <li>Struggling to Communicate</li>
        </motion.ul>
      </section>
      <section className="uncover-section">
        <motion.h2
          ref={el => sectionRefs.current[2] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[2]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
          Uncover the Complex in 12 Minutes or Less
        </motion.h2>
        <motion.p
          ref={el => sectionRefs.current[3] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[3]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Utilizing behavior assessment, expert analysis and certified coaching, Thrive Personology helps businesses to think differently in their approach to the development of thriving teams that are exceptionally productive, translating into increased revenue and growth.
        </motion.p>
        <motion.p
          ref={el => sectionRefs.current[4] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[4]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          If you are seeking a solution for your current team, leadership development, executive coaching, career development coaching, corporate training or hiring and retention strategy consultation, Thrive Personology can help.
        </motion.p>
      </section>
      <section id="why-choose-section" className="why-choose-section">
        <motion.h2
          ref={el => sectionRefs.current[5] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[5]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
          Why Choose Thrive Personology?
        </motion.h2>
        <motion.p
          ref={el => sectionRefs.current[6] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[6]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Thrive Personology has helped multiple businesses, ranging from startups to Fortune 500 companies, to improve their retention, workforce engagement, and productivity. These improvements lead to the discovery of untapped revenue and growth = industry success.
        </motion.p>
        <motion.a
          href="https://calendar.app.google/UvCVgjQ18CnSyxgo9"
          ref={el => sectionRefs.current[7] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[7]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="consult-info">
            <h3>Book a Consult:</h3>
            <p>tmeurer@thrivepersonology.com</p>
          </div>
        </motion.a>
        <motion.div
          className="profile"
          ref={el => sectionRefs.current[8] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[8]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img src={headshot} alt="Tim Meurer" />
          <div className="contact-info">
            <a href="tel:+17203202002">
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: '30px', color: '#0581f5' }} />
            </a>
            <a href="mailto:tmeurer@thrivepersonology.com">
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '30px', color: '#0581f5', padding: '20px' }} />
            </a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/timmeurer/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0077B5', margin: '0 10px' }} />
            </a>
          </div>
          <p> Tim has guided organizations to achieve dramatic wins in attrition, culture and engagement. By challenging traditional approaches to team development, Tim provides the framework to explore and predict abilities, traits and behaviors that drive candidates, employees and leaders, leading to thriving teams, increased revenue and exponential growth.</p>
        </motion.div>
      </section>
      <section className="additional-info">
        <motion.div
          className="info-box"
          ref={el => sectionRefs.current[9] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[9]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
          <h3>Uncover what's behind the behavior</h3>
          <p>Predict how individuals behave in the workplace, the pace of work, and their management style, through an assessment tool that uncovers complex human behaviors in 12 minutes or less.</p>
        </motion.div>
        <motion.div
          className="info-box"
          ref={el => sectionRefs.current[10] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[10]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Companies Thrive</h3>
          <p>Behavior analysis and coaching through Thrive Personology has revitalized teams in these organizations to reach never before achieved goals.</p>
        </motion.div>
        <motion.div
          className="info-box"
          ref={el => sectionRefs.current[11] = el}
          initial="hidden"
          animate={visibleSections.has(sectionRefs.current[11]) ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Work Better Together</h3>
          <p>Insights into work behaviors help us better manage professional relationships, create trust across teams and build a foundation for sustainable change leading to organization success.</p>
        </motion.div>
      </section>
      <h4>Testimonials</h4>
      <Testimonials /> {/* Use the new Testimonials component */}
      
    </div>
    
  );
}


export default Home;
