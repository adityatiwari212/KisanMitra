import React from "react";
import styled from "styled-components";

// Styled components for different elements
const Container = styled.div`
  margin: 20px;
`;

const Hero = styled.div`
  background-color: #28a745;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ContentItem = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Link = styled.a`
  display: block;
  color: #28a745;
  font-weight: bold;
  margin-top: 10px;
`;

function Cards2() {
  return (
    <Container>
      {/* <Hero>
        <h2>Welcome to Our KisanMitra</h2>
      </Hero> */}

      <Content>
        <ContentItem>
          <h3>Our History</h3>
          <p>Incorporated in 2005, KisanMitra started as a small initiative to connect local farmers with consumers directly. Over the years, we have grown into a trusted platform providing comprehensive support and services to farmers, retailers, and agricultural enthusiasts.</p>
          <Link href="#">Explore Our Journey</Link>
        </ContentItem>
        <ContentItem>
          <h3>About Us</h3>
          <p>KisanMitra is a leading agricultural platform dedicated to empowering farmers and revolutionizing the agricultural industry. Our mission is to bridge the gap between farmers and consumers, ensuring fair trade practices and sustainable farming.</p>
          <Link href="#">Learn More</Link>
        </ContentItem>
        <ContentItem>
          <h3>Contact Us</h3>
          <p>If you have any inquiries or would like to collaborate with us, feel free to contact our team. We are available via email at info@farmerswebsite.com or by email at +1-123-456-7890. We look forward to hearing from you!</p>
          <Link href="#">Get in Touch</Link>
        </ContentItem>
      </Content>
    </Container>
  );
}

export default Cards2;
