import React from 'react';
import styled from 'styled-components';



const Hero = styled.div`
  background-color: #28a745;
  color: #fff;
  padding: 20px;
  text-align: center;
`;
function Service() {
  return (


    <>

<Hero>
        <h2>Welcome to Our KisanMitra</h2>
      </Hero>
    <section className="transform-section" style={{ background: 'linear-gradient(to right, #28a745, #007bff)', padding: '50px 0' }}>
      <div className="container">
        <h2 className="poppins-regular text-white" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '30px', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Transforming Agriculture for a Better Future</h2>
        <ul className="service-list" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)' }}>
          <li className="service-item">
            <div className="service-content">
              <h3>We connect farmers with profitable opportunities</h3>
              <p>From government initiatives and private retailers, prioritizing their profit.</p>
              <a href="#">Learn More</a>
            </div>
          </li>
          <li className="service-item">
            <div className="service-content">
              <h3>Efficient weather forecast services</h3>
              <p>Help farmers plan agricultural activities effectively, optimizing crop yield.</p>
              <a href="#">Explore</a>
            </div>
          </li>
          <li className="service-item">
            <div className="service-content">
              <h3>Stay informed about government policies</h3>
              <p>Subsidies, and support programs available to farmers for sustainable farming practices.</p>
              <a href="#">Discover</a>
            </div>
          </li>
          <li className="service-item">
            <div className="service-content">
              <h3>Stay updated with market prices</h3>
              <p>Provided by Govt of India, assisting farmers in managing their crops effectively.</p>
              <a href="#">Learn More</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </>

  );
}

export default Service;
