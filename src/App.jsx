import { memo, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AddCompletePage, AddPage, CardListPage } from './pages';

import { CardContext, initialState, reducer } from './reducers';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardContext.Provider value={dispatch}>
      <Router>
        <Routes>
          <Route path="/" element={<CardListPage cards={state.cards} />} />
          <Route path="/add" element={<AddPage />} />
          <Route
            path="/complete"
            element={<AddCompletePage card={state.card} />}
          />
        </Routes>
      </Router>
    </CardContext.Provider>
  );
}

export default memo(App);
