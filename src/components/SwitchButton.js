import React, { useState } from 'react';
import styled from 'styled-components';

const SwitchButtonContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 34px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.switchOffBackground};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.switchKnobColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const SwitchLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
`;

const SwitchButton = ({ isChecked, onChange }) => {
    return (
      <SwitchButtonContainer>
        <SwitchInput type="checkbox" checked={isChecked} onChange={onChange} />
        <SwitchSlider />
        <SwitchLabel />
      </SwitchButtonContainer>
    );
  };

export default SwitchButton;