import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

const Showable = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
`;

export default Showable;
