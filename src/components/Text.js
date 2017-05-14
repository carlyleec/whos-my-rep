import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

const Text = styled.p`
  color: #424242;
  font-weight: 400;
  font-size: 1em;
  @media (min-width: 480px) {
    font-weight: 100;
    font-size: 1.5em;
  }
`;

export default Text;
