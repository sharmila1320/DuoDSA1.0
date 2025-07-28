import React from 'react';
import styled from 'styled-components';
import { FaHome, FaBookOpen, FaUser, FaTrophy, FaCogs } from 'react-icons/fa';  // Icons for the footer

const FooterContainer = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterIcon = styled.div`
  text-align: center;
  font-size: 24px;
  color: #555;
  cursor: pointer;

  &:hover {
    color: #4CAF50;  /* Change color on hover */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIcon>
        <FaHome size={30} />
        <div>Home</div>
      </FooterIcon>
      <FooterIcon>
        <FaBookOpen size={30} />
        <div>Lessons</div>
      </FooterIcon>
      <FooterIcon>
        <FaCogs size={30} />
        <div>Practice</div>
      </FooterIcon>
      <FooterIcon>
        <FaUser size={30} />
        <div>Profile</div>
      </FooterIcon>
      <FooterIcon>
        <FaTrophy size={30} />
        <div>Leaderboard</div>
      </FooterIcon>
    </FooterContainer>
  );
};

export default Footer;
