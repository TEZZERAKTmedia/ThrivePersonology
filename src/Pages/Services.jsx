import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import '../components/css/Services.css';
import BackgroundImage from '../../assets/Background.jpeg';
import Footer from '../components/Footer';

const services = {
  'Bx (Behavior) Assessment': [
    {
      title: 'Individualized Bx Assessment',
      details: [
        'Individualized Behavior Strategies',
        'Predictive Index Testing',
        'Results Review',
      ],
    },
    {
      title: 'Bx Boot Camp',
      details: [
        'Two (2) day Team Building Activity',
        'Bx Assessment',
        'Behavior Analysis',
        'Team Coaching',
      ],
    },
    {
      title: 'Bx Final Candidate Assessment',
      details: [
        'Bx Assessment',
        'Job and Assessment Alignment Review',
        'Results Review with Hiring Team',
        'Multi-Candidate Bx Comparison',
      ],
    },
  ],
  'Professional': [
    {
      title: 'Professional Coaching',
      details: [
        'Bx Assessment',
        'Weekly Accountability and Motivation',
        'Actionable Strategies and Action Plan',
        'Confidentiality and Trust',
        'Continuous Learning and Development',
      ],
    },
    {
      title: 'Professional Career Transition Coaching',
      details: [
        'Bx Assessment',
        'Values Assessment',
        'Interview Preparation',
        'Resume and LinkedIn Review',
        'Personalized Job Search Strategies',
        'Networking Strategies',
        'Negotiations',
      ],
    },
  ],
  'Executive': [
    {
      title: 'Executive Coaching',
      details: [
        'Customized Service',
        'Bx Assessment',
        '360 Review',
        'Goal Setting and Planning',
        'Conflict Resolution Strategies',
        'Leadership Skills Development',
      ],
    },
    {
      title: 'Executive Transition Coaching',
      details: [
        'Customized Service',
        'Seven (7) sessions',
        'Bx Assessment',
        'Values Assessment',
        'Develop a Personal Brand',
        'Establish Goals and Objectives',
      ],
    },
  ],
  'Leader and Team': [
    {
      title: 'Leadership and Team Development',
      details: [
        'Integrated design including leaders and team',
        'Consistent Alignment and Collaboration',
        'Bx Assessment',
        'Bx Individual and Team Results Review',
        '360 Assessment & Review',
        'Establishing the RIGHT Objectives',
        'Monthly 1:1 Coaching for all Participants',
        'Monthly Team Sessions',
        'Quarterly Team Objectives Review',
      ],
    },
    {
      title: 'Fractional Services',
      details: [
        'HR Strategy',
        'Talent Acquisition Strategy',
        'Internal Culture Strategy',
      ],
    },
  ],
};

const generateEmailBody = (serviceCategory, servicesList) => {
  let emailBody = `Please do not edit the content below:\n\nService Category: ${serviceCategory}\n\n`;
  servicesList.forEach(service => {
    emailBody += `Service Title: ${service.title}\n\n`;
    emailBody += 'Details:\n';
    service.details.forEach(detail => {
      emailBody += `- ${detail}\n`;
    });
    emailBody += '\n';
  });
  return emailBody;
};

const handleEmailClick = (serviceCategory, servicesList) => {
  const emailBody = generateEmailBody(serviceCategory, servicesList);
  const emailAddress = 'tmeurer@thrivepersonology.com';
  const emailSubject = encodeURIComponent('Service Inquiry');
  const emailBodyEncoded = encodeURIComponent(emailBody);

  window.location.href = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBodyEncoded}`;
};

const ServicesPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const openModal = (category, service) => {
    setSelectedService(service);
    setSelectedCategory(category);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setSelectedCategory('');
    setModalIsOpen(false);
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="services-page">
      <div className="background-container">
        <img src={BackgroundImage} alt="Background" className="background-image" />
      </div>
      <h1 className="services-header">Services</h1>
      <div className="services-body">
        {Object.entries(services).map(([category, servicesList]) => (
          <div key={category} className="service-category">
            <motion.h2 onClick={() => toggleCategory(category)}>
              {category}
              <AnimatePresence>
                {expandedCategory === category && (
                  <motion.button
                    className="inquire-button-category"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEmailClick(category, servicesList);
                    }}
                  >
                    Inquire
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.h2>
            <AnimatePresence>
              {expandedCategory === category && (
                <motion.div
                  className="service-cards"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {servicesList.map(service => (
                    <motion.div
                      key={service.title}
                      className="service-card"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => openModal(category, service)}
                    >
                      <h3>{service.title}</h3>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
     
      {selectedService && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Service Details"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>{selectedService.title}</h2>
          <ul className="modal-list">
            {selectedService.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <div className="modal-buttons">
            <button onClick={closeModal} className="close-modal-button">Close</button>
            <button className="inquire-button-modal" onClick={() => handleEmailClick(selectedCategory, [selectedService])}>Inquire</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ServicesPage;
