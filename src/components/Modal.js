import React, { useState } from 'react';
import styled from 'styled-components';
import { IoCloseSharp } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

// Modal Overlay
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Modal Container
const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.surface};
  padding: 20px;
  border-radius: 8px;
  width: 400px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns */
  gap: 20px;
`;

// Modal Header
const ModalHeader = styled.div`
  grid-column: span 2; /* Span both columns */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

// Modal Title
const ModalTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.textPrimary};
`;

// Close Button
const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.textPrimary};
`;

// Modal Body
const ModalBody = styled.div`
  grid-column: span 2; 
  display: grid;
  gap: 10px;
`;

// Input Container
const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Dropdown
const Dropdown = styled.select`
  width: 90%; 
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.inputIdle};
`;

// input
const Input = styled.input`
  width: 90%; 
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.inputIdle};
`;

// Add Button
const AddButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.buttonTem};
  color: ${({ theme }) => theme.surface};
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.buttonPrimaryHover};
  }
`;

// Danger Button
const DangerButton = styled(AddButton)`
  background-color: ${({ theme }) => theme.buttonDestructive};
  &:hover {
    background-color: ${({ theme }) => theme.buttonDestructiveHover};
  }
`;

// Remove Button
const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.buttonDestructive};
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
`;

// Button
const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.buttonPrimary};
  color: ${({ theme }) => theme.surface};
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.buttonPrimaryHover};
  }
`;

function Modal({ title, action, data, onClose, onSubmit }) {
  const [fields, setFields] = useState([data.name || '']);
  
  const handleAddField = () => {
    setFields([...fields, '']);
  };

  const handleRemoveField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleChange = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>
          {action === 'delete' ? (
            <>
              <div color='#EA5555'>Delete this board?</div>
              <p style={{fontSize:"12px !Importent"}}>Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed. {data.type}?</p>
              <div style={{display:"flex", justifyContent:"space-around"}}><DangerButton onClick={() => onSubmit(data.id)}>Delete</DangerButton>
              <Button onClick={onClose}>  Cancle  </Button></div>
              
            </>
          ) : (
            <>
              <div style={{ width: "100%" }}>
                <span>Name</span> <br/>
                <Input
                  placeholder={`Enter ${data.type} name`}
                  defaultValue={action === 'edit' ? data.name : ''}
                />
              </div>
              <div>
                <span>Column :</span>
                {fields.map((field, index) => (
                  <InputContainer key={index}>
                    <Dropdown
                      value={field}
                      onChange={(e) => handleChange(index, e.target.value)}
                    >
                      <option value="">Select a status</option>
                      <option value="TODO">TODO</option>
                      <option value="DOING">DOING</option>
                      <option value="DONE">DONE</option>
                    </Dropdown>
                    <RemoveButton onClick={() => handleRemoveField(index)}>
                      <IoCloseSharp />
                    </RemoveButton>
                  </InputContainer>
                ))}
              </div>
              <AddButton onClick={handleAddField}>
                <MdAdd /> Add New Column
              </AddButton>
              <div>
                <Button onClick={onSubmit} style={{ width: "100%" }}>
                  {action === 'add' ? 'Create' : 'Save'}
                </Button>
              </div>
            </>
          )}
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default Modal;
