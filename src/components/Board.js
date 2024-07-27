import React from 'react';
import styled from 'styled-components';
import Column from './Column';
import { MdAdd } from "react-icons/md";

const BoardContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  justify-content: center; 
  align-items: center; 
  flex-direction: column`;

const EmptyBoardMessage = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
`;

const CreateColumnButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {/* Stack items vertically */

    background-color: ${({ theme }) => theme.buttonHoverBackground};
  }
`;

const BoardContainernew = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
`;

function Board({ tasks, onTaskClick }) {
  // Check if all task lists are empty
  const isEmptyBoard = Object.values(tasks).every(taskList => taskList.length === 0);

  return (
    <BoardContainernew>
      {isEmptyBoard ? (
        <BoardContainer>
          <EmptyBoardMessage>
            <h2>This board is empty.</h2>
            <p>Create a new column to get started.</p>
            <CreateColumnButton onClick={() => onTaskClick('add', {}, 'TODO')}>
              <MdAdd /> Add New Column
            </CreateColumnButton>
          </EmptyBoardMessage>
        </BoardContainer>
      ) : (
        <>
          {Object.entries(tasks).map(([title, taskList]) => (
            <Column
              key={title}
              title={title}
              tasks={taskList}
              onTaskClick={onTaskClick}
            />
          ))}
          <Column title="+ New Column" tasks={[]} onTaskClick={() => onTaskClick('add', {}, 'TODO')} />
        </>
      )}
      </BoardContainernew>

      );
}

      export default Board;