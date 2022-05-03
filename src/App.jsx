import React from 'react';
import styled from 'styled-components';
import BackwardButton from './components/common/BackwardButton';
import CardForm from './components/common/CardForm';
import useInitialCard from './hooks/useInitialCard';
import initialCardSchema from './schema/cardSchema';

const StyledApp = styled.div`
  padding: 16px 24px;
`;

const App = () => {
  const { cardFormSchema, onSubmit, onSubmitError } =
    useInitialCard(initialCardSchema);

  return (
    <StyledApp>
      <BackwardButton>카드 추가</BackwardButton>
      <CardForm
        cardFormSchema={cardFormSchema}
        onSubmit={onSubmit}
        onSubmitError={onSubmitError}
      />
    </StyledApp>
  );
};

export default App;
