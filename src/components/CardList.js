import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #EEEEEE;
  display: : ${props => (props.show ? 'flex' : 'none')};
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 30px;
  padding: 20px;
`;

// showRepIndex
const CardList = ({ children, show }) => (
  <Wrapper show>
    { children }
  </Wrapper>
);

export default CardList;
