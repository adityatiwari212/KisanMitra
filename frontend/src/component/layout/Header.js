import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(to right, #28a745, #007bff);
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
  text-align: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const ExternalLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>KisanMitra</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/Weather_Forecast">Weather Forecast</NavLink>
        {/* <NavLink to="/dealers">Dealers</NavLink> */}
        <ExternalLink href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012">Government Schemes</ExternalLink>
        
        <ExternalLink href="https://agriwelfare.gov.in/en/CropSituation">Official Crop Info</ExternalLink>
        <NavLink to="/community">Our community </NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
