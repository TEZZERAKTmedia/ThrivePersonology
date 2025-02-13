import React, { useEffect } from 'react';
import './css/FlipCard.css'; // Adjust the path to your CSS file
import Footer from './Footer';
const Testimonials = () => {
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.4; // Trigger flip when the card is within 30% of the viewport height from the top
      const flipCards = document.querySelectorAll('.flip-card');
      flipCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom >= 0) {
          card.classList.add('flip');
        } else {
          card.classList.remove('flip');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="testimonials">
      <div className="flip-card">
        <p className="testimonial-p">"Making the jump from a barista to a web developer was a daunting journey, but Tim made it seamless. His mentorship and expertise provided me with the teamwork skills and confidence needed to thrive in the tech industry. Tim's guidance was instrumental in my successful career shift, and I am now thriving as a web developer thanks to his unwavering support."</p>
        <div className="flip-card-inner">
          
          <div className="flip-card-front">
            
            <cite className="testimonial-cite">Trentyn Nicholas</cite>
            <cite className="testimonial-cite-name">Web Developer, Site Creator</cite>
          </div>
          <div className="flip-card-back">
            <a href="https://trentynnicholas.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              <h2>Connect with Trentyn</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="flip-card">
      <p className="testimonial-p">"As a long-time people leader, working with Tim has been a game changer for myself and my team. Tim not only shared assessment results but helped me to better understand myself as a leader. His coaching has led to positive changes in my leadership approach, increasing team engagement and reigniting my passion for professional growth."</p>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            
            <cite className="testimonial-cite">Allison Michael</cite>
            <cite className="testimonial-cite-name">HR Technology Executive</cite>
          </div>
          <div className="flip-card-back">
            <a href="https://www.linkedin.com/in/allison-michael-hris/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              <h2>Connect with Allison</h2>
            </a>
          </div>
        </div>
      </div>
      
      <div className="flip-card">
      <p className="testimonial-p">Tim provided deep, personal insights into work behaviors for our entire leadership team. I better understand myself, which made me a much better team leader. His understanding of PI is second to none and he delivers the message in a way that makes you feel comfortable and challenged at the same time."</p>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            
            <cite className="testimonial-cite">Matt Cook</cite>
            <cite className="testimonial-cite-name">CTO</cite>
          </div>
          <div className="flip-card-back">
            <a href=" https://www.linkedin.com/in/mcook08/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              <h2>Connect with Matt Cook</h2>
            </a>
          </div>
        </div>
      </div>

      <div className="flip-card">
      <p className="testimonial-p">Tim provided deep, personal insights into work behaviors for our entire leadership team. I better understand myself, which made me a much better team leader. His understanding of PI is second to none and he delivers the message in a way that makes you feel comfortable and challenged at the same time."</p>
        <div className="flip-card-inner">
          <div className="flip-card-front">
           
            <cite className="testimonial-cite">Kelley Finnegan</cite>
            <cite className="testimonial-cite-name">Global HR Executive</cite>
          </div>
          <div className="flip-card-back">
            <a href="https://www.linkedin.com/in/kelley-j-finnegan-2335103/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              <h2>Connect with Kelley Finnegan</h2>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Testimonials;
