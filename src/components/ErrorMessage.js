import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background: #EC407A;
  margin-top: 10px;
`;

const ErrorText = styled.p`
  flex: 1 1;
  font-weight: 400;
  font-size: .75em;
  color: #FFF;
  margin-left: 10px;
  align-self: flex-start;
  @media (min-width: 480px) {
    font-size: 1.5em;
    font-weight: 100;
  }
`;

const Dismiss = styled.button`
  border: none;
  background: transparent;
  color: #FFF;
  font-size: 2em;
  flex: 1 1;
  margin: 0px 20px 5px 20px;
  height: 30px;
`;

const ErrorMessage = ({ children, onClick }) => (
  <Wrapper>
    <Dismiss onClick={onClick}>&times;</Dismiss>
    <ErrorText>
      { children }
    </ErrorText>
  </Wrapper>
);

export default ErrorMessage;
