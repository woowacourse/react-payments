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

const StyledApp = styled.div`
  padding: 16px 24px;
`;

const App = () => {
  const { initialField } = useFormSchema(initialCardSchema);
  const [values, setValues] = useState(initialField);
  const cardValues = useMemo(() => ({ values, setValues }), [values]);

  return (
    <CardContext.Provider value={cardValues}>
      <Router>
        <StyledApp>
          <Routes>
            <Route exact path="/" element={<StoredCardListPage />} />
            <Route exact path="/add-card" element={<AddCardPage />} />
            <Route
              exact
              path="/complete-add-card"
              element={<CompleteAddCardPage />}
            />
            <Route exact path="/edit-card" element={<EditCardPage />} />
            <Route path="*" element={<StoredCardListPage />} />
          </Routes>
        </StyledApp>
      </Router>
    </CardContext.Provider>
  );
};

export default App;
