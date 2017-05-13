import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  width: 100%;
  border: ${props => (props.disabled ? '5px solid #E0E0E0' : '5px solid #0288D1')};
  border-radius: 4px;
  outline: none;
  color: ${props => (props.disabled ? '#FFF' : '#0288D1')};
  font-size: ${props => (props.size === 'sm' ? '1em' : '1.2em')};
  background: ${props => (props.disabled ? '#E0E0E0' : '#FFF')};
  margin-top: ${props => (props.size === 'sm' ? '7.5px' : '15px')};
  &:hover{
    background: ${props => (props.disabled ? '#E0E0E0' : '#0288D1')};
    color: #FFF;
    cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  }
  @media (min-width: 480px) {
    font-size: ${props => (props.size === 'sm' ? '1.5em' : '2.2em')};
    margin-top: ${props => (props.size === 'sm' ? '15px' : '30px')};
  }
`;

const Button = ({ valid, size, children, onClick }) => (
  <StyledButton size={size} disabled={!valid} onClick={onClick}>
    { children }
  </StyledButton>
);

export default Button;
