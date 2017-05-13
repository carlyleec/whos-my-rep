import React from 'react';
import styled from 'styled-components';


const SelectBox = styled.select`
  flex: 0 1 100%;
  border: 3px solid #757575;
  border-radius: 4px;
  outline: none;
  color: #616161;
  font-size: 1em;
  background: #FFF;
  &:hover{
    border: 3px solid #039BE5;
  }
  @media (min-width: 480px) {
    font-size: 2em;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-basis: 90%;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  margin-top: 30px;
`;

const Label = styled.label`
  font-size: 1em;
  font-weight: 700;
  @media (min-width: 480px) {
    font-size: 2em;
  }
`;

const Select = ({ label, options, onChange }) => (
  <SelectWrapper>
    <Label>{label}</Label>
    <SelectBox onChange={onChange}>
      {
        options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))
      }
    </SelectBox>
  </SelectWrapper>

);

export default Select;
