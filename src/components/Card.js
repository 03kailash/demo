import React from 'react';
import styled from 'styled-components';

// Styled TaskCard Container
const TaskCardContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.cardHoverBackground};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

// Styled Title
const Title = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.textPrimary};
`;

// Styled Subtasks Info
const SubtasksInfo = styled.p`
  margin: 5px 0 0;
  color: ${({ theme }) => theme.textSecondary};
`;

const TaskCard = ({ title, subtasks, totalSubtasks, onClick }) => (
  <TaskCardContainer onClick={onClick}>
    <Title>{title}</Title>
    <SubtasksInfo>{subtasks} of {totalSubtasks} subtasks</SubtasksInfo>
  </TaskCardContainer>
);

export default TaskCard;
