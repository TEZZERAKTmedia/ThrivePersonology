import React, { useEffect } from 'react';
import '../components/css/Spinner.css'; // Adjust the path to your CSS file
import Spinner from '../../assets/Spinner.png'; // Adjust the path to your image
import Still from '../../assets/Still_Initial.png';

function SpinningImage() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;
      const animationDuration = 10 + scrollFraction * 30; // Base duration is 10s, slowing down to 50s

      const spinningImage = document.querySelector('.spinning-image');
      if (spinningImage) {
        spinningImage.style.animationDuration = `${animationDuration}s`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="spinning-image-container">
      <img src={Spinner} alt="Spinning Image" className="spinning-image" />
      <img src={Still} alt="Overlay Image" className="overlay-image" />
    </div>
  );
}

export default SpinningImage;
