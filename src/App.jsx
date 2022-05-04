import React from 'react';
import styled from 'styled-components';
import BackwardButton from './components/common/BackwardButton';
import CardForm from './components/common/CardForm';
import initialCardSchema from './schema/cardSchema';

const StyledApp = styled.div`
  padding: 16px 24px;
`;

const App = () => {
  return (
    <StyledApp>
      <BackwardButton>카드 추가</BackwardButton>
      <CardForm cardFormSchema={initialCardSchema} />
    </StyledApp>
  );
};

export default App;
