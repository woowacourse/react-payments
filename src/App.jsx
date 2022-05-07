import React from 'react';
import styled from 'styled-components';
import BackwardButton from './components/BackwardButton/BackwardButton';
import CardForm from './components/CardForm/CardForm';

const App = () => {
  return (
    <StyledApp>
      <BackwardButton>카드 추가</BackwardButton>
      <CardForm />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  padding: 16px 24px;
`;

export default App;
