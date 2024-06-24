import React from 'react';
import styled from 'styled-components';
import pic5 from './images/image.png';
import pic7 from './images/government2.jpg';

// Styled components for custom styling
const Container = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #4CAF50, #008CBA);
`;

const Title = styled.h2`
  text-transform: capitalize;
  color: #fff;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Card = styled.div`
  width: 45%;
  height: ${({ short }) => (short ? '10rem' : 'auto')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(to bottom right, #00C9FF, #92FE9D);
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const CardText = styled.p`
  color: #333;
`;

function Cards() {
  return (
    <Container>
      <Title>A Great Opportunity for Connecting with Hubs which Offer You More Profits</Title>
      <CardContainer>
        <Card>
          <CardImage src={pic5} alt="Selling Food crops to markets" />
          <CardBody>
            <CardText>Selling Food crops to markets.</CardText>
          </CardBody>
        </Card>
        <Card short>
          <CardImage src={pic7} alt="Government MSP for farmers" />
          <CardBody>
            <CardText>Government MSP for farmers.</CardText>
          </CardBody>
        </Card>
      </CardContainer>
    </Container>
  );
}

export default Cards;
