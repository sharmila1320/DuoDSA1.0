import React from 'react';
import styled from 'styled-components';
import { FaBolt, FaCalendarAlt, FaBook } from 'react-icons/fa';  // Importing icons

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%; /* Take up 80% of the screen width */
  margin: 20px auto; /* Center the container */
  gap: 20px; /* Space between stat boxes */
  flex-wrap: nowrap; /* Ensure the items stay in one line (no wrapping) */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on mobile */
    width: 100%; /* Full width for mobile */
  }
`;

const StatBox = styled.div`
  text-align: center;
  font-size: 16px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 30%;  /* Each stat box will take up 30% of the container */
  min-width: 250px; /* Ensures box doesn't get too small */
  @media (max-width: 1024px) {
    width: 45%; /* Adjust for tablet size */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width for smaller screens */
    margin-bottom: 20px; /* Adds margin between boxes on mobile */
  }
`;

const StatNumber = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const StatLabel = styled.p`
  font-size: 14px;
  color: #777;
`;

const UserStats = ({ xp, daysActive, completed }) => {
  return (
    <div>
      <StatsContainer>
        <StatBox>
          <FaBolt size={40} color="#4CAF50" /> {/* XP Icon */}
          <StatNumber>{xp}</StatNumber>
          <StatLabel>XP Total</StatLabel>
        </StatBox>
        <StatBox>
          <FaCalendarAlt size={40} color="#FF9800" /> {/* Days Active Icon */}
          <StatNumber>{daysActive}</StatNumber>
          <StatLabel>Days Active</StatLabel>
        </StatBox>
        <StatBox>
          <FaBook size={40} color="#2196F3" /> {/* Completed Lessons Icon */}
          <StatNumber>{completed}</StatNumber>
          <StatLabel>Completed</StatLabel>
        </StatBox>
      </StatsContainer>
    </div>
  );
};

export default UserStats;
