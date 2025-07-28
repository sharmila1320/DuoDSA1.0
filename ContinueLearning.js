import React from 'react';
import styled from 'styled-components';

const ContinueContainer = styled.div`
  width: 80%;
  margin: 20px 0;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const LessonTitle = styled.h2`
  font-size: 18px;
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

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ContinueLearning = ({ lessonTitle, progress }) => {
  return (
    <ContinueContainer>
      <LessonTitle>{lessonTitle}</LessonTitle>
      <ProgressBar>
        <ProgressFill progress={progress} />
      </ProgressBar>
      <Button>Continue Lesson</Button>
    </ContinueContainer>
  );
};

export default ContinueLearning;
