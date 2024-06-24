import React, { useState, useEffect } from 'react';
import pic from './images/kisan2.jpg';
import pic2 from './images/sell.jpg';
import pic3 from './images/handshake2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function MiddleContent() {
  const [index, setIndex] = useState(0); // State to manage carousel index

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming you have 3 images in the carousel
    }, 2000); // Interval in milliseconds (2 seconds in this case)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <style>{`
        .styled-img {
          padding: 10px; /* Add padding */
          border: 2px solid #fff; /* Add stylish border */
          border-radius: 10px; /* Add border radius for rounded corners */
        }
      `}</style>
      <div className="carousel-inner">
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <img src={pic} className="d-block w-100 styled-img" alt="..." />
        </div>
        <div className={`carousel-item ${index === 1 ? 'active' : ''}`}>
          <img src={pic2} className="d-block w-100 styled-img" alt="..." />
        </div>
        <div className={`carousel-item ${index === 2 ? 'active' : ''}`}>
          <img src={pic3} className="d-block w-100 styled-img" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default MiddleContent;
