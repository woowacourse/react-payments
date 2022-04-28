import React from 'react';
import styled from 'styled-components';
import BackwardButton from './components/common/BackwardButton';
import CardForm from './components/CardForm';

const StyledApp = styled.div`
  padding: 16px 24px;
`;

const App = () => {
  return (
    <StyledApp>
      <BackwardButton>카드 추가</BackwardButton>
      <CardForm />
    </StyledApp>
  );
};

export default App;
