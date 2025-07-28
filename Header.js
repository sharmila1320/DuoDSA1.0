import React from 'react';
import styled from 'styled-components';
import { FaFire } from 'react-icons/fa';  // Importing FaFire for day streak

const HeaderContainer = styled.div`
  padding: 20px;
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  margin: 10px 0;
`;

const ProgressFill = styled.div`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: #4caf50;
  border-radius: 5px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StreakText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #ff9800;
`;

const Header = ({ progress, streak }) => {
  return (
    <HeaderContainer>
      <LeftSection>
        <Title>Welcome back!</Title>
        <SubTitle>Ready to code?</SubTitle>
        <ProgressBar>
          <ProgressFill progress={progress} />
        </ProgressBar>
        <p>{`You're ${progress}% there!`}</p>
      </LeftSection>
      <RightSection>
        <FaFire size={30} color="#FF5722" /> {/* Fire Icon for Day Streak */}
        <StreakText>{streak} day streak</StreakText>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
