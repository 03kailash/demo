// src/components/Column.js
import React from 'react';
import styled from 'styled-components';
import TaskCard from './Card';

const ColumnContainer = styled.div`
  width: 300px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.background};
  border: ${({ theme }) => theme.borderColor};
  border-radius: 4px;
`;

const ColumnHeader = styled.h2`
  padding: 10px;
  background-color: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.textPrimary};
  border-bottom: ${({ theme }) => theme.borderColor};
`;

function Column({ title, tasks, onTaskClick }) {
  const handleTaskClick = (task) => {
    if (title === 'DONE') {
      onTaskClick('delete', task, title);
    } else {
      onTaskClick('edit', task, title);
    }
  };

  return (
    <ColumnContainer>
      <ColumnHeader>{title}</ColumnHeader>
      {tasks?.map(task => (
        <TaskCard 
          key={task.id} 
          {...task} 
          onClick={() => handleTaskClick(task)} 
        />
      ))}
    </ColumnContainer>
  );
}

export default Column;
