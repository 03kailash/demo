import React, { useState } from 'react';
import styled from 'styled-components';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import logo from "../assests/img/logo.svg"
import icon from "../assests/icons/fluent_board-split-24-regular.png"
import SwitchButton from '../components/SwitchButton';

// Sidebar Container
const SidebarContainer = styled.div`
  width: 250px;
  padding: 20px;
  background-color: ${({ theme }) => theme.sidebar};
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.border};
`;

// Sidebar Item
const SidebarItem = styled.div`
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.textPrimary};
  &:hover {
    background-color: ${({ theme }) => theme.buttonPrimary};
    color: #fff;
  }
`;

// Button
const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.buttonPrimary};
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.buttonPrimaryHover};
  }
`;

// Theme Toggle Container
const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  & > * {
    margin-right: 10px;
    cursor: pointer;
    font-size: 24px;
    color: ${({ theme }) => theme.textSecondary};

    &:hover {
      color: ${({ theme }) => theme.buttonPrimary};
    }
  }
`;

function Sidebar({ setPageName, toggleTheme }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(prevState => !prevState);
    toggleTheme(isChecked ? 'light' : 'dark');
  }
  return (
    <SidebarContainer>
      <img src={logo} alt='logo' width={150} height={80} />
      <SidebarItem onClick={() => setPageName('Platform Launch')}> <img src={icon} alt='icon' width={18} height={18} /> Platform Launch</SidebarItem>
      <SidebarItem onClick={() => setPageName('Marketing Plan')}>  <img src={icon} alt='icon' width={18} height={18} /> Marketing Plan</SidebarItem>
      <SidebarItem onClick={() => setPageName('Roadmap')}>  <img src={icon} alt='icon' width={18} height={18} /> Roadmap</SidebarItem>
      <SidebarItem onClick={() => setPageName('New Board')}>  <img src={icon} alt='icon' width={18} height={18} />+ Create New Board</SidebarItem>
      <ThemeToggleContainer>
        <MdLightMode onClick={() => toggleTheme('light')} />
        <SwitchButton isChecked={isChecked} onChange={handleChange} />
        <MdDarkMode onClick={() => toggleTheme('dark')} />
      </ThemeToggleContainer>
     
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </SidebarContainer>
  );
}

export default Sidebar;
