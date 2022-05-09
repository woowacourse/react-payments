import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCardPage from './pages/AddCardPage';
import StoredCardListPage from './pages/StoredCardListPage';
import CompleteAddCardPage from './pages/CompleteAddCardPage';
import EditCardPage from './pages/EditCardPage';
import { PATH } from './utils/constants';
import { CardContextProvider } from './contexts/CardContext';

const StyledApp = styled.div`
  padding: 16px 24px;
`;

const App = () => {
  return (
    <CardContextProvider>
      <Router>
        <StyledApp>
          <Routes>
            <Route exact path={PATH.HOME} element={<StoredCardListPage />} />
            <Route exact path={PATH.ADD_CARD_PAGE} element={<AddCardPage />} />
            <Route
              exact
              path={PATH.COMPLETE_ADD_PAGE}
              element={<CompleteAddCardPage />}
            />
            <Route
              exact
              path={PATH.EDIT_CARD_PAGE}
              element={<EditCardPage />}
            />
            <Route path="*" element={<StoredCardListPage />} />
          </Routes>
        </StyledApp>
      </Router>
    </CardContextProvider>
  );
};

export default App;
