import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCardPage from './components/pages/AddCardPage';
import StoredCardListPage from './components/pages/StoredCardListPage';
import CompleteAddCardPage from './components/pages/CompleteAddCardPage';
import EditCardPage from './components/pages/EditCardPage';
import CardContext from './contexts/CardContext';
import initialCardSchema from './schema/cardSchema';
import useFormSchema from './hooks/useFormSchema';
import { PATH } from './utils/constants';

const StyledApp = styled.div`
  padding: 16px 24px;
`;

const App = () => {
  const { initialField } = useFormSchema(initialCardSchema);
  const [values, setValues] = useState(initialField);
  const cardValues = useMemo(
    () => ({ values, setValues, initialField }),
    [values]
  );

  return (
    <CardContext.Provider value={cardValues}>
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
    </CardContext.Provider>
  );
};

export default App;
