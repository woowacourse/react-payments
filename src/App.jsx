/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import BackwardButton from './components/BackwardButton';
import CardForm from './components/CardForm';
// import ToolTip from './components/ToolTip';

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
