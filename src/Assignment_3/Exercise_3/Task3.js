import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? '#007bff' : '#ccc')};
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

const Task3 = () => {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {
      setIsActive(!isActive);
    };
  
    return (
      <div>
      <h1>This is Task3</h1>
        <StyledButton active={isActive} onClick={handleClick}>
          Click me
        </StyledButton>
        <Tooltip active={isActive}>Tooltip Text</Tooltip>
      </div>
    );
  };
  
  export default Task3;
  