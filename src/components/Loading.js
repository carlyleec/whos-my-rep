import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

const Loading = styled.p`
  display: ${props => (props.show ? 'block' : 'none')};
  color: #424242;
  font-weight: 100;
  font-size: .75em;
  width: 100%;
  text-align: center;
  @media (min-width: 480px) {
    font-size: 1.5em;
  }
`;

export default Loading;
