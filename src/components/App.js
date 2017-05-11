import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import Title from './Title';

const AppWrapper = styled.div`
  width: 100%;
`;

const App = () => (
  <AppWrapper>
    <Container>
      <Title>Who&apos;s my representative?</Title>
    </Container>
  </AppWrapper>
);


export default App;
