import React from 'react';
import styled from 'styled-components';
import { MdAdd } from "react-icons/md";

const HeaderContainer = styled.header`
  padding: 20px;
  background-color: ${({ theme }) => theme.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const PageTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.buttonPrimary};
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.buttonSecondary};
  }
`;

function Header({ pageName, onAdd }) {
  return (
    <HeaderContainer>
      <PageTitle>{pageName}</PageTitle>
      <div>
        <Button onClick={onAdd}> <MdAdd/>Add New Task</Button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
