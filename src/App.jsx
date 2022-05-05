import React from 'react';
import styled from 'styled-components';
import AddCardPage from './components/pages/AddCardPage';

const StyledApp = styled.div`
  padding: 16px 24px;
`;

const App = () => {
  return (
    <StyledApp>
      <AddCardPage />
    </StyledApp>
  );
};

export default App;
