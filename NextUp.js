import React from 'react';
import styled from 'styled-components';
import { FaLock } from 'react-icons/fa';  // Lock icon for locked lessons

const NextUpContainer = styled.div`
  width: 80%;  /* Take up 80% of the screen width */
  margin: 20px auto;  /* Center the container */
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const LessonBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #f9f9f9;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const LessonTitle = styled.div`
  font-weight: 600;
  color: #333;
  flex-grow: 1;  /* Ensures the title stays on the left */
`;

const LessonStatus = styled.div`
  display: flex;
  justify-content: flex-end;  /* Aligning Programming Basics to the right */
  align-items: center;
  color: #777;
  margin-left: 10px;
`;

const LockIcon = styled(FaLock)`
  color: #ccc;
  margin-left: 10px;
`;

const NextUp = ({ lessons }) => {
  return (
    <NextUpContainer>
      <Heading>Next Up</Heading>
      {lessons.map((lesson, index) => (
        <LessonBox key={index}>
          <LessonTitle>
            <span>{lesson.number}</span> {lesson.title}
          </LessonTitle>
          <LessonStatus>
            <div>{lesson.status}</div>
            {lesson.locked && <LockIcon size={20} />}
          </LessonStatus>
        </LessonBox>
      ))}
    </NextUpContainer>
  );
};

export default NextUp;
