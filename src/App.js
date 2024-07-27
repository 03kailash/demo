// src/components/App.js
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import Sidebar from './Sidebar/Sidebar';
import Board from './components/Board';
import Modal from './components/Modal';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

function App() {
  const [theme, setTheme] = useState('light');
  const [pageName, setPageName] = useState('Platform Launch');
  const [tasks, setTasks] = useState({
    TODO: [
      { id: 1, name: "Build UI for onboarding flow", status: "TODO", subtasks: 0, totalSubtasks: 3 },
      { id: 2, name: "Design settings and search pages", status: "TODO", subtasks: 1, totalSubtasks: 3 },
      { id: 3, name: "Conduct 5 wireframe tests", status: "TODO", subtasks: 1, totalSubtasks: 1 }
    ],
    DOING: [
      { id: 4, name: "Build UI for search", status: "DOING", subtasks: 0, totalSubtasks: 1 },
      { id: 5, name: "Add account management endpoints", status: "DOING", subtasks: 1, totalSubtasks: 1 },
      { id: 6, name: "Create wireframe prototype", status: "DOING", subtasks: 2, totalSubtasks: 3 }
    ],
    DONE: [
      { id: 7, name: "Create template structures", status: "DONE", subtasks: 0, totalSubtasks: 2 },
      { id: 8, name: "Review results of usability tests and iterate", status: "DONE", subtasks: 1, totalSubtasks: 2 },
      { id: 9, name: "Design onboarding flow", status: "DONE", subtasks: 3, totalSubtasks: 3 },
      { id: 10, name: "QA and test all major user journeys", status: "DONE", subtasks: 0, totalSubtasks: 2 },
      { id: 11, name: "Add search endpoints", status: "DONE", subtasks: 1, totalSubtasks: 2 },
      { id: 12, name: "Create paper prototypes and conduct 10 usability tests with potential customers", status: "DONE", subtasks: 0, totalSubtasks: 2 },
      { id: 13, name: "Add authentication endpoints", status: "DONE", subtasks: 1, totalSubtasks: 2 },
      { id: 14, name: "Market discovery", status: "DONE", subtasks: 1, totalSubtasks: 1 },
      { id: 15, name: "Competitor analysis", status: "DONE", subtasks: 1, totalSubtasks: 3 },
      { id: 16, name: "Research the market", status: "DONE", subtasks: 2, totalSubtasks: 2 }
    ]
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    action: null,
    data: null,
    column: null
  });

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleModalOpen = (action, data, column) => {
    setModalState({ isOpen: true, action, data, column });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, action: null, data: null, column: null });
  };

  const handleSubmit = (task) => {
    const { action, data, column } = modalState;
  
    if (action === 'add') {
      setTasks(prevTasks => ({
        ...prevTasks,
        [column]: [...prevTasks[column], task]
      }));
    } else if (action === 'edit') {
      setTasks(prevTasks => ({
        ...prevTasks,
        [column]: prevTasks[column].map(t =>
          t.id === task.id ? task : t
        )
      }));
    } else if (action === 'delete') {
      setTasks(prevTasks => ({
        ...prevTasks,
        [data.status]: prevTasks[data.status].filter(t => t.id !== task.id)
      }));
    }
  
    closeModal();
  };
  

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppContainer>
        <Header pageName={pageName} onAdd={() => handleModalOpen('add', {}, 'TODO')} />
        <MainContent>
          <Sidebar setPageName={setPageName} toggleTheme={toggleTheme} />
          <Board tasks={tasks} onTaskClick={(action, data, column) => handleModalOpen(action, data, column)} />
        </MainContent>
        {modalState.isOpen && (
          <Modal
            title={`${modalState.action === 'delete' ? 'Delete' : modalState.action === 'add' ? 'Create New' : 'Edit'} Task`}
            action={modalState.action}
            data={modalState.data}
            onClose={closeModal}
            onSubmit={handleSubmit}
          />
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
